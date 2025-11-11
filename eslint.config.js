import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import baseConfig from 'eslint-config/base.js';

export default defineConfig([
  includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
  ...baseConfig,
]);
