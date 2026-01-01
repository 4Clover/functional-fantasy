# Dashboard and Settings Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build protected dashboard and settings pages with OAuth provider management and ESPN cookie linking.

**Architecture:** Next.js App Router with client-side session management via better-auth's `useSession` hook. Protected routes redirect unauthenticated users to login. Settings page manages linked accounts and enables additional provider linking.

**Tech Stack:** Next.js 15, React 19, better-auth, Tailwind CSS 4, TypeScript

---

## Task 1: Create Session Protection Middleware Component

**Files:**
- Create: `apps/web/src/components/protected-route.tsx`
- Create: `apps/web/src/lib/get-session.ts` (server-side session helper)

**Step 1: Create server-side session helper**

Create `apps/web/src/lib/get-session.ts`:

```typescript
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export async function getServerSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
```

**Step 2: Create protected route wrapper component**

Create `apps/web/src/components/protected-route.tsx`:

```typescript
'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
}
```

**Step 3: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 4: Commit**

```bash
git add apps/web/src/components/protected-route.tsx apps/web/src/lib/get-session.ts
git commit -m "feat(auth): add protected route component and server session helper"
```

---

## Task 2: Build Dashboard Page

**Files:**
- Create: `apps/web/src/app/dashboard/page.tsx`
- Modify: `apps/web/src/app/page.tsx` (add redirect logic)

**Step 1: Create dashboard page**

Create `apps/web/src/app/dashboard/page.tsx`:

```typescript
'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Fantasy Football</h1>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/settings"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome back, {session?.user?.name || 'User'}!
            </h2>
            <p className="mt-1 text-gray-600">
              {session?.user?.email}
            </p>
          </div>

          {/* Link accounts CTA */}
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Link your fantasy accounts
            </h3>
            <p className="mt-2 text-gray-600">
              Connect ESPN, Sleeper, or Yahoo accounts for automatic syncing with your leagues!
            </p>
            <Link
              href="/settings"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Link More Accounts
            </Link>
          </div>

          {/* Placeholder for leagues */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">Your Leagues</h3>
            <p className="mt-2 text-gray-500">
              No leagues synced yet. Link your accounts to get started.
            </p>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
```

**Step 2: Update home page to redirect authenticated users**

Modify `apps/web/src/app/page.tsx`:

```typescript
'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && session) {
      router.push('/dashboard');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (session) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Fantasy Football Platform</h1>
        <p className="mt-4 text-lg text-gray-600">
          Manage all your fantasy leagues in one place
        </p>
        <Link
          href="/login"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
```

**Step 3: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 4: Test dashboard in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Navigate to `http://localhost:3000/dashboard` (not logged in)
2. Expected: Redirects to `/login`
3. Login with Google
4. Expected: Redirects to `/dashboard`, shows user name and email

**Step 5: Commit**

```bash
git add apps/web/src/app/dashboard/page.tsx apps/web/src/app/page.tsx
git commit -m "feat(dashboard): add protected dashboard page with sign out"
```

---

## Task 3: Create Settings Page Shell

**Files:**
- Create: `apps/web/src/app/settings/page.tsx`

**Step 1: Create settings page**

Create `apps/web/src/app/settings/page.tsx`:

```typescript
'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';

export default function SettingsPage() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center">
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>

          <div className="mt-8 space-y-8">
            {/* Account Info Section */}
            <section className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
              <div className="mt-4 space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Name:</span>
                  <p className="text-gray-900">{session?.user?.name || 'Not set'}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <p className="text-gray-900">{session?.user?.email}</p>
                </div>
              </div>
            </section>

            {/* Linked Accounts Section - Placeholder */}
            <section className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-lg font-semibold text-gray-900">Linked Accounts</h2>
              <p className="mt-2 text-sm text-gray-600">
                Manage your connected fantasy football platforms
              </p>
              <div className="mt-4">
                <p className="text-gray-500">Loading linked accounts...</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 3: Test settings page in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Login and navigate to `/settings`
2. Expected: Shows account info, back button works

**Step 4: Commit**

```bash
git add apps/web/src/app/settings/page.tsx
git commit -m "feat(settings): add settings page shell with account info"
```

---

## Task 4: Build Linked Accounts Display Component

**Files:**
- Create: `apps/web/src/components/linked-accounts.tsx`
- Create: `apps/web/src/app/api/auth/accounts/route.ts`
- Modify: `apps/web/src/app/settings/page.tsx`

**Step 1: Create API route to fetch user's linked accounts**

Create `apps/web/src/app/api/auth/accounts/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { prisma } from '@fantasy/database';

export async function GET(_request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const accounts = await prisma.account.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        providerId: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ accounts });
  } catch (error) {
    console.error('[Accounts] GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch accounts' }, { status: 500 });
  }
}
```

**Step 2: Create linked accounts component**

Create `apps/web/src/components/linked-accounts.tsx`:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { signIn } from '@/lib/auth-client';

type Account = {
  providerId: string;
  createdAt: string;
};

type Provider = {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: 'oauth' | 'manual';
};

const PROVIDERS: Provider[] = [
  {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
      </svg>
    ),
  },
  {
    id: 'yahoo',
    name: 'Yahoo',
    type: 'oauth',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.8 3L8.4 11.4 4 3H0l6.4 12v9h4v-9L16.8 3h-4zM20 3h4v21h-4z" />
      </svg>
    ),
  },
  {
    id: 'discord',
    name: 'Discord',
    type: 'oauth',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    id: 'espn',
    name: 'ESPN',
    type: 'manual',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
];

export function LinkedAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [linkingProvider, setLinkingProvider] = useState<string | null>(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch('/api/auth/accounts');
      if (response.ok) {
        const data = await response.json();
        setAccounts(data.accounts);
      }
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkProvider = async (provider: Provider) => {
    if (provider.type === 'manual') {
      // ESPN will be handled separately
      return;
    }

    setLinkingProvider(provider.id);
    try {
      if (provider.id === 'google') {
        await signIn.social({
          provider: 'google',
          callbackURL: '/settings',
        });
      } else {
        await signIn.oauth2({
          providerId: provider.id,
          callbackURL: '/settings',
        });
      }
    } catch (error) {
      console.error(`Failed to link ${provider.name}:`, error);
      setLinkingProvider(null);
    }
  };

  const isLinked = (providerId: string) => {
    return accounts.some((acc) => acc.providerId === providerId);
  };

  if (loading) {
    return <div className="text-gray-500">Loading accounts...</div>;
  }

  return (
    <div className="space-y-4">
      {PROVIDERS.map((provider) => {
        const linked = isLinked(provider.id);
        const isLinking = linkingProvider === provider.id;

        return (
          <div
            key={provider.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-700">{provider.icon}</div>
              <div>
                <p className="font-medium text-gray-900">{provider.name}</p>
                <p className="text-sm text-gray-500">
                  {linked ? 'Connected' : 'Not connected'}
                </p>
              </div>
            </div>

            {linked ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                ✓ Linked
              </span>
            ) : (
              <button
                onClick={() => handleLinkProvider(provider)}
                disabled={isLinking || provider.type === 'manual'}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLinking ? 'Linking...' : provider.type === 'manual' ? 'Configure' : 'Link'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

**Step 3: Update settings page to use LinkedAccounts component**

Modify `apps/web/src/app/settings/page.tsx`:

Replace the "Linked Accounts Section - Placeholder" with:

```typescript
{/* Linked Accounts Section */}
<section className="rounded-lg bg-white p-6 shadow">
  <h2 className="text-lg font-semibold text-gray-900">Linked Accounts</h2>
  <p className="mt-2 text-sm text-gray-600">
    Manage your connected fantasy football platforms
  </p>
  <div className="mt-4">
    <LinkedAccounts />
  </div>
</section>
```

Add import at top:

```typescript
import { LinkedAccounts } from '@/components/linked-accounts';
```

**Step 4: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 5: Test in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Navigate to `/settings`
2. Expected: Shows Google as "Linked", others as "Not connected"
3. Click "Link" on Yahoo/Discord (if credentials configured)
4. Expected: OAuth flow initiates

**Step 6: Commit**

```bash
git add apps/web/src/components/linked-accounts.tsx apps/web/src/app/api/auth/accounts/route.ts apps/web/src/app/settings/page.tsx
git commit -m "feat(settings): add linked accounts display with OAuth linking"
```

---

## Task 5: Build ESPN Cookie Form Component

**Files:**
- Create: `apps/web/src/components/espn-link-form.tsx`
- Modify: `apps/web/src/components/linked-accounts.tsx`

**Step 1: Create ESPN link form component**

Create `apps/web/src/components/espn-link-form.tsx`:

```typescript
'use client';

import { useState } from 'react';

type EspnLinkFormProps = {
  onSuccess: () => void;
};

export function EspnLinkForm({ onSuccess }: EspnLinkFormProps) {
  const [swid, setSwid] = useState('');
  const [s2, setS2] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/espn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ swid, s2 }),
      });

      if (!response.ok) {
        throw new Error('Failed to link ESPN account');
      }

      onSuccess();
      setSwid('');
      setS2('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to link ESPN account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="swid" className="block text-sm font-medium text-gray-700">
          SWID Cookie
        </label>
        <input
          type="text"
          id="swid"
          value={swid}
          onChange={(e) => setSwid(e.target.value)}
          required
          placeholder="{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="s2" className="block text-sm font-medium text-gray-700">
          ESPN S2 Cookie
        </label>
        <input
          type="text"
          id="s2"
          value={s2}
          onChange={(e) => setS2(e.target.value)}
          required
          placeholder="AEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX..."
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Linking...' : 'Link ESPN Account'}
        </button>

        <a
          href="https://github.com/cwendt94/espn-api/wiki/ESPN-Authentication"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          How to find ESPN cookies →
        </a>
      </div>
    </form>
  );
}
```

**Step 2: Update LinkedAccounts to show ESPN form in modal/expandable**

Modify `apps/web/src/components/linked-accounts.tsx`:

Add imports:

```typescript
import { EspnLinkForm } from './espn-link-form';
```

Add state at component top:

```typescript
const [showEspnForm, setShowEspnForm] = useState(false);
```

Update the button logic for ESPN:

```typescript
{linked ? (
  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
    ✓ Linked
  </span>
) : (
  <button
    onClick={() => {
      if (provider.id === 'espn') {
        setShowEspnForm(!showEspnForm);
      } else {
        handleLinkProvider(provider);
      }
    }}
    disabled={isLinking}
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isLinking ? 'Linking...' : provider.id === 'espn' ? 'Configure' : 'Link'}
  </button>
)}
```

Add ESPN form below the providers list:

```typescript
{/* ESPN Form Expandable */}
{showEspnForm && (
  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
    <h3 className="font-medium text-gray-900">Link ESPN Account</h3>
    <p className="mt-1 text-sm text-gray-600">
      ESPN requires manual cookie authentication. Follow the guide to extract your cookies.
    </p>
    <div className="mt-4">
      <EspnLinkForm
        onSuccess={() => {
          setShowEspnForm(false);
          fetchAccounts();
        }}
      />
    </div>
  </div>
)}
```

**Step 3: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 4: Test in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Navigate to `/settings`
2. Click "Configure" on ESPN
3. Expected: Form expands
4. Fill in dummy cookies
5. Expected: Form submits (will fail without ENCRYPTION_KEY, but validates flow)

**Step 5: Commit**

```bash
git add apps/web/src/components/espn-link-form.tsx apps/web/src/components/linked-accounts.tsx
git commit -m "feat(settings): add ESPN cookie link form"
```

---

## Task 6: Add Unlink Account Functionality

**Files:**
- Create: `apps/web/src/app/api/auth/accounts/[providerId]/route.ts`
- Modify: `apps/web/src/components/linked-accounts.tsx`

**Step 1: Create DELETE endpoint for unlinking accounts**

Create `apps/web/src/app/api/auth/accounts/[providerId]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { prisma } from '@fantasy/database';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ providerId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { providerId } = await params;

    // Check if user has other accounts (prevent locking out)
    const accountCount = await prisma.account.count({
      where: {
        userId: session.user.id,
      },
    });

    if (accountCount <= 1) {
      return NextResponse.json(
        { error: 'Cannot unlink your only account' },
        { status: 400 }
      );
    }

    await prisma.account.deleteMany({
      where: {
        userId: session.user.id,
        providerId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Account] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to unlink account' }, { status: 500 });
  }
}
```

**Step 2: Add unlink button to LinkedAccounts component**

Modify `apps/web/src/components/linked-accounts.tsx`:

Add unlink handler:

```typescript
const handleUnlinkProvider = async (providerId: string, providerName: string) => {
  if (!confirm(`Are you sure you want to unlink ${providerName}?`)) {
    return;
  }

  try {
    const response = await fetch(`/api/auth/accounts/${providerId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      alert(data.error || 'Failed to unlink account');
      return;
    }

    fetchAccounts();
  } catch (error) {
    console.error(`Failed to unlink ${providerName}:`, error);
    alert('Failed to unlink account');
  }
};
```

Update the linked state UI:

```typescript
{linked ? (
  <div className="flex items-center gap-2">
    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
      ✓ Linked
    </span>
    <button
      onClick={() => handleUnlinkProvider(provider.id, provider.name)}
      className="text-sm text-red-600 hover:text-red-700"
    >
      Unlink
    </button>
  </div>
) : (
  // ... existing button code
)}
```

**Step 3: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 4: Test in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Navigate to `/settings`
2. Click "Unlink" on a linked account (but not your only one)
3. Expected: Confirmation dialog, then account unlinks
4. Try to unlink your only account
5. Expected: Error message "Cannot unlink your only account"

**Step 5: Commit**

```bash
git add apps/web/src/app/api/auth/accounts/[providerId]/route.ts apps/web/src/components/linked-accounts.tsx
git commit -m "feat(settings): add account unlinking with safety check"
```

---

## Task 7: Add Discord Bot Integration Section (Placeholder)

**Files:**
- Create: `apps/web/src/components/discord-bot-setup.tsx`
- Modify: `apps/web/src/app/settings/page.tsx`

**Step 1: Create Discord bot setup component**

Create `apps/web/src/components/discord-bot-setup.tsx`:

```typescript
'use client';

export function DiscordBotSetup() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-medium text-gray-900">Discord League Updater</h3>
        <p className="mt-2 text-sm text-gray-600">
          Get real-time notifications for trades, waivers, and league updates in your Discord server.
        </p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700">Step 1: Invite the bot</p>
            <p className="mt-1 text-sm text-gray-600">
              Add the Fantasy Football Bot to your Discord server
            </p>
            <button
              disabled
              className="mt-2 rounded-lg bg-[#5865F2] px-4 py-2 text-sm font-medium text-white opacity-50 cursor-not-allowed"
            >
              Invite Bot (Coming Soon)
            </button>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700">Step 2: Configure notifications</p>
            <p className="mt-1 text-sm text-gray-600">
              Set up which leagues send updates to which channels
            </p>
            <button
              disabled
              className="mt-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 cursor-not-allowed"
            >
              Configure Settings (Coming Soon)
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        💡 Note: You can use Discord to login without enabling bot notifications. They are separate features.
      </div>
    </div>
  );
}
```

**Step 2: Add Discord Bot section to settings page**

Modify `apps/web/src/app/settings/page.tsx`:

Add import:

```typescript
import { DiscordBotSetup } from '@/components/discord-bot-setup';
```

Add section after Linked Accounts:

```typescript
{/* Discord Bot Section */}
<section className="rounded-lg bg-white p-6 shadow">
  <h2 className="text-lg font-semibold text-gray-900">Discord Integration</h2>
  <p className="mt-2 text-sm text-gray-600">
    Enable Discord bot notifications for your leagues
  </p>
  <div className="mt-4">
    <DiscordBotSetup />
  </div>
</section>
```

**Step 3: Verify TypeScript compiles**

Run: `pnpm --filter @fantasy/web typecheck`

Expected: No errors

**Step 4: Test in browser**

Run: `pnpm --filter @fantasy/web dev`

1. Navigate to `/settings`
2. Expected: Discord bot section shows placeholder UI

**Step 5: Commit**

```bash
git add apps/web/src/components/discord-bot-setup.tsx apps/web/src/app/settings/page.tsx
git commit -m "feat(settings): add Discord bot integration placeholder"
```

---

## Task 8: Polish and Final Testing

**Files:**
- Modify: `apps/web/src/app/login/page.tsx` (update redirect after login)

**Step 1: Ensure login redirects to dashboard by default**

The login page already uses `callbackUrl` from search params with `/dashboard` as default. Verify this is working correctly.

**Step 2: Full end-to-end testing**

Run: `pnpm --filter @fantasy/web dev`

Test flow:
1. Visit `/` as unauthenticated user → Shows landing page
2. Click "Get Started" → Redirects to `/login`
3. Login with Google → Redirects to `/dashboard`
4. Verify dashboard shows user name, email, sign out button
5. Click "Link More Accounts" → Redirects to `/settings`
6. Verify settings shows Google as linked
7. Click "Configure" on ESPN → Form expands
8. Navigate back to dashboard → Works correctly
9. Click "Sign Out" → Redirects to `/login`
10. Try to access `/dashboard` while logged out → Redirects to `/login`

**Step 3: Run build to ensure production works**

Run: `pnpm --filter @fantasy/web build`

Expected: Build succeeds with no errors

**Step 4: Final commit**

```bash
git add .
git commit -m "chore(auth): final polish and testing for dashboard/settings"
```

---

## Summary

**What was built:**
- ✅ Protected route component with session checking
- ✅ Dashboard page with user info and sign out
- ✅ Settings page with account management
- ✅ Linked accounts display with OAuth linking
- ✅ ESPN cookie form for manual linking
- ✅ Account unlinking with safety checks
- ✅ Discord bot integration placeholder
- ✅ Full authentication flow (login → dashboard → settings)

**What's ready for next:**
- League syncing functionality
- Discord bot configuration (when bot is built)
- Account deletion/management
- User preferences and notifications

**Testing checklist:**
- [ ] Protected routes redirect when not logged in
- [ ] Dashboard shows correct user information
- [ ] OAuth linking flow works for all providers
- [ ] ESPN form submits correctly
- [ ] Account unlinking prevents locking out user
- [ ] Navigation between pages works smoothly
- [ ] Sign out redirects to login
