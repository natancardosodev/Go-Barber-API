module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "indent": ["error", 4],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
    // "no-unsed-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};
