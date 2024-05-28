import globals from "globals";
import simpleImportSort from "eslint-plugin-simple-import-sort"
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser }, plugins: { simpleImportSort }, rules: {
      "eslint-plugin-simple-import-sort/imports": "error",
    },
  },
  rocketSeatEslint,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];