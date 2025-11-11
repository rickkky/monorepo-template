import jslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default defineConfig([
  {
    name: 'base',
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: { globals: globals.browser },
  },
  {
    ...jslint.configs.recommended,
    name: 'js/recommended',
  },
  tslint.configs.recommended,
  {
    ...prettierRecommended,
    name: 'prettier/recommended',
  },
  {
    name: 'simple-import-sort/base',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
