// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Use this configuration option to add custom reporters to Jest
  reporters: ['default', 'unmock-jest/reporter'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec).[tj]s?(x)',
  ],

  // A map from regular expressions to paths to transformers
  // transform: null,
  transform: { '^.+\\.jsx?$': 'babel-jest' },
};
