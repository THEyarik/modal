module.exports = {
  env: {
    browser: true,
    es2021 : true,
    node   : true
  },
  extends: [
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 15,
    sourceType : 'module'
  },
  plugins: [
    'import',
    'react',
    '@typescript-eslint'
  ],
  rules: {
    // styling
    'key-spacing': ['error', {
      singleLine: {
        mode       : 'strict',
        beforeColon: false,
        afterColon : true
      },
      multiLine: {
        mode       : 'strict',
        beforeColon: false,
        afterColon : true,
        align      : 'colon'
      }
    }],
    'no-multi-spaces'            : 'off',
    'arrow-parens'               : ['error', 'always'],
    'array-bracket-spacing'      : ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'no-spaced-func'             : 'error',
    'space-infix-ops'            : 'error',
    'space-in-parens'            : ['error', 'never'],
    'comma-spacing'              : ['error', { before: false, after: true }],
    quotes                       : ['error', 'single'],
    'max-len'                    : ['error', { code: 120 }],
    'comma-dangle'               : ['error', 'never'],
    'object-curly-newline'       : 'off',
    'object-curly-spacing'       : ['error', 'always'],
    'quote-props'                : ['error', 'as-needed'],
    'dot-notation'               : 'error',
    'object-property-newline'    : 'off',
    'lines-between-class-members': 'off',
    semi                         : ['error', 'always'],
    indent                       : ['error', 2],
    'no-tabs'                    : 'error',
    'no-multiple-empty-lines'    : 'error',
    'arrow-spacing'              : ['error', { before: true, after: true }],
    'jsx-quotes'                 : ['error', 'prefer-double'],

    // other
    'no-plusplus'                 : ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign'           : ['error', { props: false }],
    'no-await-in-loop'            : 'off',
    'max-classes-per-file'        : 'error',
    'no-nested-ternary'           : 'off',
    'no-shadow'                   : 'off',
    'no-void'                     : 'error',
    'no-unused-vars'              : 'off',
    'no-use-before-define'        : ['error', { functions: false }],
    'prefer-template'             : 'error',
    'no-dupe-keys'                : 'error',
    'prefer-promise-reject-errors': 'off',
    'space-before-blocks'         : ['error', 'always'],

    // import
    'import/first'                     : 'off',
    'import/named'                     : 'error',
    'import/namespace'                 : 'error',
    'import/default'                   : 'error',
    'import/export'                    : 'error',
    'import/extensions'                : 'off',
    'import/no-unresolved'             : 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export'     : 'off',
    'import/no-duplicates'             : 'error',

    '@typescript-eslint/no-shadow'              : 'error',
    '@typescript-eslint/no-unused-vars'         : 'error',
    '@typescript-eslint/no-dupe-class-members'  : 'error',
    '@typescript-eslint/indent'                 : ['error', 2],
    '@typescript-eslint/type-annotation-spacing': ['error'],

    'react/display-name'                : 'off',
    'react-hooks/exhaustive-deps'       : 'off',
    'react/jsx-closing-tag-location'    : ['error', 'tag-aligned'],
    'react/jsx-max-props-per-line'      : ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-first-prop-new-line'     : ['error', 'multiline'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-tag-spacing'             : ['error', {
      closingSlash     : 'never',
      beforeSelfClosing: 'always',
      afterOpening     : 'never',
      beforeClosing    : 'never'
    }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }]

  }
};

