/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ["@bham/eslint-config/vue-app.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./vite-browser.json"],
  },
};