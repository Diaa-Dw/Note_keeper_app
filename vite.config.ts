import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  optimizeDeps: {
    include: ["@mui/icons-material"],
  },
  server: {
    proxy: {
      // "/api": "http://localhost:8080",
    },
  },
});
