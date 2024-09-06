module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'commonjs'
  },
  ignorePatterns: ['node_modules/', 'coverage/', 'tests/']
}
