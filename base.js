
module.exports = {
  "extends": "airbnb",
  "rules": {
    "indent": [2, 4, {"SwitchCase": 1}],

    // Stricter rules
    "prefer-spread": 2,                         // http://eslint.org/docs/rules/prefer-spread
    "dot-location": [2, "property"],            // http://eslint.org/docs/rules/dot-location

    "react/jsx-curly-spacing": 2,               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-no-duplicate-props": 2,          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/no-direct-mutation-state": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
 }
}
