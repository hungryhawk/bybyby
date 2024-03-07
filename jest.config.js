/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{test.js,test.jsx,test.ts,test.tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.css$': 'identity-obj-proxy',
    },
};

export default config;
