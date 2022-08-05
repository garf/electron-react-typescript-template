// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/electron",
    "plugin:import/typescript"
  ],
  rules: {
    'semi': ['error', 'never'],
  },
  "parser": "@typescript-eslint/parser",
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": {
          "resolve": {
            "alias": {
              "Api": path.resolve(__dirname, 'src/api'),
              "Assets": path.resolve(__dirname, 'src/assets/'),
              "Components": path.resolve(__dirname, 'src/components'),
              "Layouts": path.resolve(__dirname, 'src/layouts'),
              "Services": path.resolve(__dirname, 'src/services'),
              "Views": path.resolve(__dirname, 'src/views'),
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          }
        }
      }
    }
  }
}
