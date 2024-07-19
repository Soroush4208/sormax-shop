// 1. install dependencies=>
// npm install eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

// 2. Initialize ESLint =>
// npx eslint --init

// 3. add this codes in eslintrc.js
// module.exports = {
//     root: true,
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     env: {
//       browser: true,
//       node: true,
//       es6: true,
//     },
//     extends: [
//       'standard',
//       'plugin:react/recommended',
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react-hooks/recommended',
//     ],
//     plugins: [
//       'react',
//       'react-hooks',
//       '@typescript-eslint',
//     ],
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//     },
//   };

// now for tailwind

// 1. install dependencies =>
// npm install eslint-plugin-tailwindcss --save-dev
// 2. add this codes in eslintrc.js
// module.exports = {
//     root: true,
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     env: {
//       browser: true,
//       node: true,
//       es6: true,
//     },
//     extends: [
//       'standard',
//       'plugin:react/recommended',
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react-hooks/recommended',
//     ],
//     plugins: [
//       'react',
//       'react-hooks',
//       '@typescript-eslint',
//       'tailwindcss',
//     ],
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//       'tailwindcss/classnames-order': 'warn',
//       'tailwindcss/enforces-shorthand': 'warn',
//       'tailwindcss/migration-from-tailwind-2': 'warn',
//       'tailwindcss/no-arbitrary-value': 'warn',
//       'tailwindcss/no-custom-classname': 'off',
//     },
//   };

// add this configs in settings.json
// "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "editor.formatOnSave": true,
//   "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": "explicit",
//     "source.organizeImports": "explicit"
//   },
