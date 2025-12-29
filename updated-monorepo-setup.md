# Monorepo Configuration Fix Plan

## Summary

Fix the pnpm/Turborepo monorepo setup with current 2025 best practices:

- **Single root ESLint config** with flat config (ESLint 9+)
- **Source-first packages** (TypeScript consumed directly, no build step)
- **Keep `@fantasy/*` naming**

## Critical Issues to Fix

| Issue                                                        | Severity |
| ------------------------------------------------------------ | -------- |
| `packages/eslint-config/next.mjs` spreads non-array (broken) | Critical |
| `@fantasy/eslint-config` missing dependencies                | Critical |
| Library packages have invalid `main: ./src/index.ts`         | High     |
| `apps/web` has no ESLint config after deletion               | High     |
| Workspace deps in wrong section (deps vs devDeps)            | Medium   |

---

## Phase 1: ESLint Configuration (Blocking)

### 1.1 Update root `eslint.config.mjs`

Add React/Next.js rules for apps/web:

```javascript
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/build/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx,mts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    files: ['apps/web/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  }
);
```

### 1.2 Update root `package.json` devDependencies

Add:

```json
{
  "devDependencies": {
    "@next/eslint-plugin-next": "^15.1.0",
    "eslint": "^9.16.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.1.0"
  }
}
```

Update lint script:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### 1.3 Delete `packages/eslint-config/`

Remove entire directory - no longer needed with single root config.

---

## Phase 2: Dependency Cleanup

### 2.1 Fix `apps/web/package.json`

Move workspace packages to correct sections:

**dependencies** (runtime):

- `@fantasy/ui`
- `@fantasy/utils`
- `@fantasy/types`
- `@fantasy/api-client`

**devDependencies** (build-time only):

- `@fantasy/typescript-config`

**Remove**:

- `@fantasy/eslint-config` (deleted in Phase 1)

### 2.2 Delete `apps/web/pnpm-workspace.yaml`

This file should only exist at repo root.

---

## Phase 3: Source-First Package Configuration

### 3.1 Update library `package.json` files

Pattern for `packages/ui/package.json`, `packages/utils/package.json`, `packages/types/package.json`, `packages/api-client/package.json`:

```json
{
  "name": "@fantasy/ui",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "import": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "files": ["src"]
}
```

Remove `main` and `types` fields - use `exports` only.

### 3.2 Create `tsconfig.json` for each library package

**packages/ui/tsconfig.json**:

```json
{
  "extends": "@fantasy/typescript-config/base.json",
  "compilerOptions": {
    "rootDir": "./src",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**packages/utils/tsconfig.json**, **packages/types/tsconfig.json**, **packages/api-client/tsconfig.json**:

```json
{
  "extends": "@fantasy/typescript-config/base.json",
  "compilerOptions": {
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### 3.3 Update `apps/web/next.config.mjs`

Add transpilePackages for source-first consumption:

```javascript
const nextConfig = {
  reactCompiler: true,
  eslint: {
    ignoreDuringBuilds: true, // Lint runs from root
  },
  transpilePackages: ['@fantasy/ui', '@fantasy/utils', '@fantasy/types', '@fantasy/api-client'],
};

export default nextConfig;
```

### 3.4 Simplify `apps/web/tsconfig.json`

Remove `@fantasy/*` paths - pnpm workspace linking handles resolution:

```json
{
  "extends": "@fantasy/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 3.5 Update `packages/typescript-config/package.json`

Add proper exports:

```json
{
  "name": "@fantasy/typescript-config",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "exports": {
    "./base.json": "./base.json",
    "./nextjs.json": "./nextjs.json"
  },
  "files": ["*.json"]
}
```

---

## Phase 4: Verification

```bash
# Clean install
rm -rf node_modules apps/*/node_modules packages/*/node_modules pnpm-lock.yaml
pnpm install

# Test all scripts
pnpm lint
pnpm typecheck
pnpm build
pnpm dev
```

---

## Files Summary

| File                                      | Action                                            |
| ----------------------------------------- | ------------------------------------------------- |
| `eslint.config.mjs`                       | UPDATE - Add React/Next.js rules                  |
| `package.json`                            | UPDATE - Add ESLint deps, update lint script      |
| `packages/eslint-config/`                 | DELETE - Entire directory                         |
| `apps/web/package.json`                   | UPDATE - Fix deps placement, remove eslint-config |
| `apps/web/pnpm-workspace.yaml`            | DELETE                                            |
| `apps/web/tsconfig.json`                  | UPDATE - Remove @fantasy/\* paths                 |
| `apps/web/next.config.mjs`                | UPDATE - Add transpilePackages                    |
| `packages/ui/package.json`                | UPDATE - Proper exports                           |
| `packages/utils/package.json`             | UPDATE - Proper exports                           |
| `packages/types/package.json`             | UPDATE - Proper exports                           |
| `packages/api-client/package.json`        | UPDATE - Proper exports                           |
| `packages/ui/tsconfig.json`               | CREATE                                            |
| `packages/utils/tsconfig.json`            | CREATE                                            |
| `packages/types/tsconfig.json`            | CREATE                                            |
| `packages/api-client/tsconfig.json`       | CREATE                                            |
| `packages/typescript-config/package.json` | UPDATE - Add exports                              |

---

## Research Sources

- [Turborepo ESLint Guide](https://turborepo.com/docs/guides/tools/eslint)
- [typescript-eslint Monorepo Config](https://typescript-eslint.io/troubleshooting/typed-linting/monorepos/)
- [ESLint Flat Config with defineConfig](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Managing TS Packages in Monorepos](https://nx.dev/blog/managing-ts-packages-in-monorepos)
- [Live Types in TypeScript Monorepo](https://colinhacks.com/essays/live-types-typescript-monorepo)
