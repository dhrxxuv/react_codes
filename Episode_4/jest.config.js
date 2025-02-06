/** @type {import('jest').Config} */
const config = {
  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react)/" // This ensures lucide-react is transformed by Babel
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest" // This will ensure that Jest uses Babel to transform JS and JSX files
  },
  testEnvironment: "jsdom", // Ensure you're using jsdom for React testing
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};

module.exports = config;
