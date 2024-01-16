/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended', 'plugin:eslint-plugin-storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowExpressions: true }
    ],
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent-props': [2, 4],
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'react/no-deprecated': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'eslint handle-callback-err': 'off',
    'react/display-name': 'off'
  },
  globals: {
    ' __IS_DEV__': true
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
}
