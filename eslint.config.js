import antfu from "@antfu/eslint-config";

export default antfu({
  react: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  formatters: {
    react: true,
    css: true,
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
});
