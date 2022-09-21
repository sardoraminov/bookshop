import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith("ion-") || tag.startsWith("strike"),
        },
      },
    }),
  ],
  server: {
    host: true,
  },
});
