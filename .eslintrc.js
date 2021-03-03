module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
  ],
  parserOptions: {
    ecmaVersion: 2020, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
  },
  rules: {
    indent: ['warn', 2, {
      'SwitchCase': 1
    }],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true /*允许模板字符串(es6)*/,
      },
    ],
    semi: ['error', 'never'] /*分号*/,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
    'react/no-children-prop': 'off'
  },
}
