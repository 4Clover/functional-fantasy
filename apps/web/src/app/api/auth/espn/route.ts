import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { prisma } from '@fantasy/database';
import { encrypt, decrypt } from '@fantasy/utils';

const EspnCredentialsSchema = z.object({
  s2: z.string().min(1, 'S2 cookie is required'),
  swid: z.string().min(1, 'SWID is required'),
});

function getEncryptionKey(): Buffer | null {
  const keyHex = process.env.ENCRYPTION_KEY;
  if (!keyHex) return null;
  return Buffer.from(keyHex, 'hex');
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const parseResult = EspnCredentialsSchema.safeParse(await request.json());
    if (!parseResult.success) {
      return NextResponse.json({ error: 'Invalid ESPN credentials' }, { status: 400 });
    }
    const { s2, swid } = parseResult.data;

    const encryptionKey = getEncryptionKey();
    if (!encryptionKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const encryptedS2 = encrypt(s2, encryptionKey);

    await prisma.account.upsert({
      where: {
        id: `espn-${session.user.id}`,
      },
      create: {
        id: `espn-${session.user.id}`,
        userId: session.user.id,
        providerId: 'espn',
        accountId: swid,
        accessToken: encryptedS2,
      },
      update: {
        accountId: swid,
        accessToken: encryptedS2,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[ESPN Auth] POST error:', error);
    return NextResponse.json({ error: 'Failed to save ESPN credentials' }, { status: 500 });
  }
}

export async function GET(_request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        providerId: 'espn',
      },
    });

    if (!account) {
      return NextResponse.json({ linked: false });
    }

    const encryptionKey = getEncryptionKey();
    if (!encryptionKey || !account.accessToken) {
      return NextResponse.json({ error: 'Cannot retrieve ESPN credentials' }, { status: 500 });
    }

    // Verify decryption works but don't return the credential
    decrypt(account.accessToken, encryptionKey);

    return NextResponse.json({
      linked: true,
      swid: account.accountId,
    });
  } catch (error) {
    console.error('[ESPN Auth] GET error:', error);
    return NextResponse.json({ error: 'Failed to retrieve ESPN credentials' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.account.deleteMany({
      where: {
        userId: session.user.id,
        providerId: 'espn',
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[ESPN Auth] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete ESPN credentials' }, { status: 500 });
  }
}
