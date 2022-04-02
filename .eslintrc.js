module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {

  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
