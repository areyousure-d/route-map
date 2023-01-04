const { configure, presets } = require("eslint-kit");

module.exports = configure({
  presets: [
    presets.typescript(),
    presets.react({
      newJSXTransform: true,
    }),
    presets.prettier(),
    presets.node(),
    presets.imports(),
  ],

  extend: {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
});
