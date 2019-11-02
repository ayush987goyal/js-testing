const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    // 'kentcdodds/jest',
    'plugin:jest/recommended',
    'kentcdodds/react',
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
    'jest/expect-expect': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
  ],
}
