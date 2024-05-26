// eslint.config.js

import js from '@eslint/js'

export default [
  // js.configs.recommended, // Recommended config applied to all files
  // Override the recommended config
  {
    rules: {
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': [
        'error',
        { code: 120, ignoreComments: true, ignoreStrings: true },
      ],
    },
    // ...other configuration
  },
]
