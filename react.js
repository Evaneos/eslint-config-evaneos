module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/style',
    './rules/style-react',
    './rules/override',
    './rules/react',
  ].map(require.resolve),
};
