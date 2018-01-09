module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier', 'react-app'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    quotes: [1, 'single'],
    semi: [2, 'always'],
    'prettier/prettier': [2, null, '@prettier']
  }
};
