import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  {
    ...react.configs.flat.recommended,
    name: 'react/recommended',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...react.configs.flat['jsx-runtime'],
    name: 'react/jsx-runtime',
  },
  reactHooks.configs['recommended-latest'],
]);
