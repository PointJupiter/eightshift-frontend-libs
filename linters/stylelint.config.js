module.exports = {
  extends: '@infinumjs/stylelint-config',
  rules: {
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always', {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    'declaration-colon-space-after': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-after': 'always',
    'max-empty-lines': 2,
    'rule-empty-line-before': [
      'always', {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};
