
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/override',
    './rules/style',
  ].map(require.resolve),
}
