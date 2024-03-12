module.exports = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // The test environment that will be used for testing
    testEnvironment: "jest-environment-jsdom-sixteen",
  
    // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
  
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src'],
  
    // Setup files to run before each test
    
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    type: "module"
  };