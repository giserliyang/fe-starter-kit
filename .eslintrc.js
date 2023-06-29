module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error', 'time', 'timeEnd'] }]
        : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ['warn', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-lonely-if': 'error',
    'no-useless-return': 'error',
    'no-else-return': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-undef-init': 'error',
    'no-useless-concat': 'warn',
    'rest-spread-spacing': ['error', 'never'],
    'prefer-template': 'warn',
    'no-useless-rename': 'error',
    'no-useless-computed-key': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prettier/prettier': 'off',
  },
}
