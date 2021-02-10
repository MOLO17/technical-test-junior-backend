/* eslint-disable @typescript-eslint/no-var-requires, functional/immutable-data */
const path = require('path');

const realativeCoverageRoot = path.relative(__dirname, process.cwd());

module.exports = {
  transform: {
    '\\.[tj]s': [
      'babel-jest',
      { configFile: path.join(__dirname, 'babel.config.js') },
    ],
  },
  testMatch: [path.join(process.cwd(), '**/*.spec.ts')],
  coverageDirectory: path.join(process.cwd(), 'coverage'),
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.d.ts',
    '!**/*.model.ts',
    '!**/*.config.ts',
  ].map(stringPath =>
    stringPath[0] !== '!'
      ? path.join(realativeCoverageRoot, stringPath)
      : `!${path.join(realativeCoverageRoot, stringPath.slice(1))}`,
  ),
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
};
