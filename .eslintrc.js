module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "arrow-body-style": 2,
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prefer-const": 1
  }
};