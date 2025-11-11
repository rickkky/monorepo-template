import { defineConfig } from 'eslint/config';
import vue from 'eslint-plugin-vue';
import tslint from 'typescript-eslint';

export default defineConfig([
  {
    name: 'vue/parser',
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tslint.parser } },
  },
  vue.configs['flat/recommended'],
]);
