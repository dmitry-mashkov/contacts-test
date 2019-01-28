/**
 * @overview  Jest configuration
 */

module.exports = {
  roots: [
    'src/app'
  ],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globals: {
    'ts-test': {
      tsConfigFile: 'src/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  testMatch: [
    '**/?(*.)+(spec|test).ts'
  ],
  collectCoverageFrom: [
    'src/app/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
