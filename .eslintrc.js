module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
};
