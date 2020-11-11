module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'jsx-ally',
    'import',
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension':[
          'warn', {
              extensions: ['.jsx', '.js'],
          },
      ],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
  },
};
