import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },

  testMatch: [
    '<rootDir>/src/**/*.test.(ts|tsx)',
    '<rootDir>/src/**/*.spec.(ts|tsx)'
  ],

  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  }
};

export default config;
