module.exports = {
  extends: ['eslint-config-airbnb', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: ["error", "always"]
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'func-names': ['error', 'never'],
    'linebreak-style': 0,
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-confusing-arrow': 'off',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'never'],
    'valid-jsdoc': ['error'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'import/extensions': ['off', 'never'],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-unused-vars': ['error', { args: 'after-used' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        // By default it will error if a <Link /> comp doesn't have an 'href' attribute, but Gatsby uses a 'to' attribute.
        components: []
      }
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any']
      }
    ]
  }
}
