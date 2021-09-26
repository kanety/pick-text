module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  moduleDirectories: [
    "src",
    "node_modules"
  ],
  setupFiles: [
    "<rootDir>/test/setup.js"
  ],
  testMatch: [
    "**/*spec.js"
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js"
  ],
  coverageDirectory : "coverage"
};
