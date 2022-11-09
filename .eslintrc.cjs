// // eslint-disable-next-line no-undef
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:jsx-a11y/recommended',
//     'plugin:prettier/recommended',
//   ],
//   overrides: [],
//   parserOptions: {
//     ecmaFeatures: { jsx: true },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-uses-react': 'off',
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'off',
//     'react/prop-types': 'off',
//     'prettier/prettier': 'error',
//     quotes: ['error', 'single', { allowTemplateLiterals: true }],
//     'react/display-name': 'off',
//   },
//   settings: {
//     react: { version: 'detect' },
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    nodes: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
