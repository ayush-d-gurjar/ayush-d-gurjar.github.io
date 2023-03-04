module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0,
    "react/destructuring-assignment": [0],
    'indent': 'off',
    "eol-last": 0,
  },
};