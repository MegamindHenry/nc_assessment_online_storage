module.exports = {
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  },
  'ignorePatterns': ['build/*'],
  'globals': {
    'expect': 'readonly',
    'test': 'readonly',
    'module': 'readonly',
    'process': 'readonly'
  }
};
