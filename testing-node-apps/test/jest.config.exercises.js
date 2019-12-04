const path = require('path')

module.exports = {
  displayName: 'exercise',
  roots: [path.join(__dirname, '../src')],
  rootDir: path.join(__dirname, '..'),
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.exercise.*'],
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  coverageDirectory: path.join(__dirname, '../coverage-exercises'),
  coveragePathIgnorePatterns: ['.*/__tests__/.*'],
  setupFilesAfterEnv: [require.resolve('./setup-env')],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
}
