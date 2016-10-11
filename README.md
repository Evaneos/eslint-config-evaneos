# eslint-config-evaneos

This package provides Evaneos's .eslintrc as an extensible shared config, based on [Airbnb's rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

### base

1. Install
```
(
  export PKG=eslint-config-airbnb-base;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG" && npm install --save-dev eslint-config-evaneos
)
```
2. add `"extends": "evaneos/base"` to your .eslintrc


### react

1. Install
```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG" && npm install --save-dev eslint-config-evaneos babel-eslint
)
```
2. add `"extends": "evaneos/react"` to your .eslintrc
