/* eslint-disable */
module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
    ignoreFiles: ['**/*.js', 'node_modules/'],
    rules: {
        'at-rule-empty-line-before': null,
        'color-hex-length': 'long',
        'no-descending-specificity': null,
        'rule-empty-line-before': null,
        'selector-class-pattern': null,
        'scss/load-no-partial-leading-underscore': null,
    },
};
