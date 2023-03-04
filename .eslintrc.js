module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-prototype-builtins': 0,
    'no-undef': 0,
    'no-plusplus': 0,
    'no-empty': 0,
    'no-unused-vars': 0,
    'prefer-const': 0,

  },
};
