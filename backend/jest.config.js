/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|ts)']
};
