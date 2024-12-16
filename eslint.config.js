import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupPluginRules } from '@eslint/compat'

import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import jestPlugin from 'eslint-plugin-jest'
import reactHooks from 'eslint-plugin-react-hooks'
import pluginQuery from '@tanstack/eslint-plugin-query'

import globals from 'globals'
import tsParser from '@typescript-eslint/parser'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ),
  {
    ignores: ['eslint.config.mjs'],
    plugins: {
      '@tanstack/query': pluginQuery,
      prettier,
      react,
      jest: jestPlugin,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...jestPlugin.environments.globals.globals,
        process: true,
        Promise: true,
        module: true,
        require: true,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-empty-function': 2,
      '@typescript-eslint/no-this-alias': 2,
      '@typescript-eslint/no-var-requires': 2,
      '@typescript-eslint/no-explicit-any': 2,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 2,
      'no-redeclare': 'off',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['global', 'jsx'],
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'no-restricted-globals': ['error', 'origin'],
      'react/display-name': 1,
      'prefer-spread': 1,

      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true,
        },
      ],

      '@/no-extra-semi': 1,
      '@typescript-eslint/ban-ts-comment': 2,

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/no-did-mount-set-state': 1,

      'react/boolean-prop-naming': [
        1,
        {
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        },
      ],

      'react/no-array-index-key': 1,
      'react/no-access-state-in-setstate': 2,
      'react/no-this-in-sfc': 2,
      'react/no-children-prop': 0,
      'react/no-deprecated': 1,
      'react/no-direct-mutation-state': 2,
      'react/no-multi-comp': 0,
      'react/no-typos': 2,
      'react/no-string-refs': 2,
      'react/no-unescaped-entities': 1,
      'react/no-unused-prop-types': 1,
      'react/no-unused-state': 1,
      'react/prefer-es6-class': 2,

      'react/prefer-stateless-function': [
        1,
        {
          ignorePureComponents: true,
        },
      ],

      'react/prop-types': 1,
      'react/require-optimization': 0,
      'react/self-closing-comp': 1,
      'react/style-prop-object': 2,
      'react/jsx-boolean-value': 2,
      'react/jsx-key': 2,
      'react/no-did-update-set-state': 0,
      'react/jsx-handler-names': 0,
      'prettier/prettier': 1,
      'no-invalid-this': 'off',
      'no-var': 1,
      'no-prototype-builtins': 0,
      'no-console': 0,
      'no-debugger': 1,
      'no-useless-escape': 0,
      'prefer-const': 1,
      'prefer-rest-params': 0,
      'jsx-a11y/alt-text': 0,
      'jsx-a11y/href-no-hash': 0,
      'arrow-body-style': 0,
      'class-methods-use-this': 0,
      'no-mixed-operators': 0,
      semi: [1, 'never'],
      radix: 0,

      'keyword-spacing': [
        2,
        {
          before: true,
          after: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      'react/prop-types': 0,
    },
  },
]
