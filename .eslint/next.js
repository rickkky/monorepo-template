import nextjs from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    name: 'next/recommended',
    settings: {
      next: {
        rootDir: 'packages/view/',
      },
    },
    plugins: {
      '@next/next': nextjs,
    },
    rules: nextjs.configs.recommended.rules,
  },
]);
