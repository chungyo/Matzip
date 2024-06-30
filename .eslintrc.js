module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',
    ident: 'off',
  },
};
