module.exports = {
    moduleNameMapper: {
    '^styled-components': '<rooDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
