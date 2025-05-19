/** @type {import('lint-staged').Configuration} */
export default {
  '*': ['eslint --fix', 'prettier --ignore-unknown --write'],
};
