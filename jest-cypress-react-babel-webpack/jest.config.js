module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  // after jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
}
