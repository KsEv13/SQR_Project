const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: false,
};