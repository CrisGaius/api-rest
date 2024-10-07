import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"], // Sempre exigir ponto e vírgula
      "quotes": ["error", "double"], // Exigir aspas duplas
      "no-console": "warn", // Avisar quando usar `console.log`
      "indent": ["error", 2], // Exigir indentação de 2 espaços
      "class-methods-use-this": "off",
    }
  }
];
