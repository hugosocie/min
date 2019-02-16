module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:vue/strongly-recommended"
  ],
  "plugins": [
    "vue"
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
    "import/no-extraneous-dependencies": "off", // Temporary
    "no-param-reassign": "off",
    "no-plusplus": "off"
  },
  "parserOptions":{
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": "webpack"
  },
};