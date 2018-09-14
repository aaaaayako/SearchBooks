module.exports = {
  extends: ['airbnb', 'gnavi', 'prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // 型はflowで管理する
    'react/prop-types': 0,
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],

    // styled-normalize読み込みのため
    'no-unused-expressions': ['error', { "allowTaggedTemplates": true }],
    
    // prettierで管理
    'react/jsx-one-expression-per-line': 0
  },
}
