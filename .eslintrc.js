module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:vue/strongly-recommended"
  ],
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "no-console": "warn",
    "func-names": ["warn", "never"],
    "space-before-function-paren": ["warn", "never"],
    
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off"
  },
  "parserOptions":{
    "parser": "babel-eslint"
  },
  "settings": {
    "import/resolver": "webpack"
  }
};