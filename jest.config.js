/** @type { import('ts-jest/dist/types').InitialOptionsTsJest } */
module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: [
    '([a-z/.]{1,}).test.ts$',
  ],
  transformIgnorePatterns: ['node_modules/(?!svgicons2svgfont|svg-pathdata|yerror)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
