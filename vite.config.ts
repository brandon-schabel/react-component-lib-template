import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
});
