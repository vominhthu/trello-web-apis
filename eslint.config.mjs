import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    plugins: {},

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,
            allowImportExportEverywhere: true,
        },
    },

    rules: {
        "no-console": 1,
        "no-extra-boolean-cast": 0,
        "no-lonely-if": 1,
        "no-unused-vars": 1,
        "no-trailing-spaces": 1,
        "no-multi-spaces": 1,
        "no-multiple-empty-lines": 1,
        "space-before-blocks": ["error", "always"],
        "object-curly-spacing": [1, "always"],
        indent: ["warn", 2],
        semi: [1, "never"],
        quotes: ["error", "single"],
        "array-bracket-spacing": 1,
        "linebreak-style": 0,
        "no-unexpected-multiline": "warn",
        "keyword-spacing": 1,
        "comma-dangle": 1,
        "comma-spacing": 1,
        "arrow-spacing": 1,
    },
}];