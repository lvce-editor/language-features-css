import { defineConfig } from 'eslint/config'
import * as config from '@lvce-editor/eslint-config'

export default defineConfig([
  ...config.default,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    },
  },
  {
    files: ['packages/extension/src/languageFeaturesCssMain.ts'],
    rules: {
      'unicorn/no-top-level-assignment-in-function': 'off',
      'unicorn/no-top-level-side-effects': 'off',
    },
  },
  {
    files: ['packages/extension/src/parts/Logger/Logger.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['packages/extension/src/parts/TokenizeCss/TokenizeCss.ts'],
    rules: {
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-duplicated-branches': 'off',
      'sonarjs/no-nested-assignment': 'off',
      'unicorn/no-break-in-nested-loop': 'off',
      'unicorn/no-duplicate-if-branches': 'off',
    },
  },
  {
    files: ['packages/extension/test/**/*.ts'],
    rules: {
      '@cspell/spellchecker': 'off',
      'jest/expect-expect': 'off',
    },
  },
  {
    files: ['packages/extension/test/getMatchingCompletion.test.ts'],
    rules: {
      '@cspell/spellchecker': 'off',
      'jest/no-disabled-tests': 'off',
      'jest/no-commented-out-tests': 'off',
    },
  },
])
