const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
    },

    rules: {},

    settings: {
        react: {
            version: "detect",
        },
    },
}, {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        sourceType: "script",
        parserOptions: {},
    },

    files: ["**/.eslintrc.{js,cjs}"],
}]);
