import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { prisma } from '@fantasy/database';
import { encrypt, decrypt } from '@fantasy/utils';

interface EspnCredentials {
  s2: string;
  swid: string;
}

function getEncryptionKey(): Buffer | null {
  const keyHex = process.env.ENCRYPTION_KEY;
  if (!keyHex) return null;
  return Buffer.from(keyHex, 'hex');
}

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await request.json()) as EspnCredentials;
  const { s2, swid } = body;

  if (!s2 || !swid) {
    return NextResponse.json({ error: 'Missing ESPN credentials' }, { status: 400 });
  }

  const encryptionKey = getEncryptionKey();
  if (!encryptionKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  // Encrypt the S2 cookie before storing
  const encryptedS2 = encrypt(s2, encryptionKey);

  // Store ESPN credentials in Account table
  await prisma.account.upsert({
    where: {
      id: `espn-${session.user.id}`,
    },
    create: {
      id: `espn-${session.user.id}`,
      userId: session.user.id,
      providerId: 'espn',
      accountId: swid, // SWID as account identifier
      accessToken: encryptedS2, // Encrypted S2 cookie
    },
    update: {
      accountId: swid,
      accessToken: encryptedS2,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({ success: true });
}

export async function GET(_request: NextRequest) {
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
    return NextResponse.json({ linked: true, error: 'Cannot decrypt credentials' });
  }

  const s2 = decrypt(account.accessToken, encryptionKey);

  return NextResponse.json({
    linked: true,
    swid: account.accountId,
    s2,
  });
}

export async function DELETE(_request: NextRequest) {
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
}
