module.exports = {
  root: true,
  extends: ["@bham/eslint-config/vue-app.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
