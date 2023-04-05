import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  base: "/sua-uach-conversion/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~@": resolve(__dirname, "src"),
    },
  },
};
