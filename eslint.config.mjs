import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(["node_modules", "lib"]),
  {
    files: ["src/**/*.ts", "test/**/*.ts"],

    extends: compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      ecmaVersion: 5,
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
          minimumDescriptionLength: 4,
        },
      ],
      "linebreak-style": ["error", "unix"],

      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],

      "no-var": "error",
      "no-new-object": "error",
      "no-new-wrappers": "error",
      "quote-props": ["error", "as-needed"],
      "no-array-constructor": "error",
      "object-shorthand": ["error", "properties"],

      "prefer-destructuring": [
        "warn",
        {
          VariableDeclarator: {
            array: true,
            object: true,
          },

          AssignmentExpression: {
            array: false,
            object: true,
          },
        },
      ],

      quotes: ["error", "single"],
      "prefer-template": "off",
      "template-curly-spacing": ["warn", "never"],
      "prefer-rest-params": "error",
      "wrap-iife": ["error", "outside"],
      "no-loop-func": "error",
      "no-new-func": "error",

      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true,
        },
      ],

      "space-before-function-paren": ["error", "always"],

      "space-before-blocks": [
        "error",
        {
          functions: "always",
        },
      ],

      "no-param-reassign": [
        "warn",
        {
          props: false,
        },
      ],

      "prefer-spread": "error",

      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: true,
        },
      ],

      "arrow-spacing": "error",
      "arrow-parens": ["error", "as-needed"],

      "no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],

      "no-iterator": "error",

      "no-restricted-syntax": [
        "error",
        "WithStatement",
        "BinaryExpression[operator='in']",
        {
          selector:
            "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
          message: "setTimeout must always be invoked with two arguments.",
        },
      ],

      "generator-star-spacing": [
        "error",
        {
          before: false,
          after: false,
        },
      ],

      "dot-notation": "error",

      "no-undef": [
        "error",
        {
          typeof: false,
        },
      ],

      "no-multi-assign": "error",
      "no-multi-spaces": "warn",

      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],

      "max-len": [
        "off",
        {
          code: 80,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],

      eqeqeq: "warn",
      "no-case-declarations": "warn",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",

      "no-mixed-operators": [
        "error",
        {
          groups: [
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["&&", "||"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ],

          allowSamePrecedence: true,
        },
      ],

      "nonblock-statement-body-position": ["error", "beside"],
      "no-else-return": "error",

      "spaced-comment": [
        "error",
        "always",
        {
          block: {
            balanced: true,
          },
        },
      ],

      indent: ["error", 2],

      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "comma-dangle": ["error", "always-multiline"],
      "space-infix-ops": "error",
      camelcase: "off",
      "keyword-spacing": "error",
      "no-fallthrough": "off",
      curly: "off",
      semi: ["error", "never"],
      "no-empty": "off",
      "no-alert": "warn",
      "no-class-assign": "off",
      "no-useless-escape": "off",
      "no-bitwise": "off",
      "no-eq-null": "off",
      "no-debugger": "error",
      "guard-for-in": "warn",
      "object-curly-spacing": ["error", "always"],
    },
  },
]);
