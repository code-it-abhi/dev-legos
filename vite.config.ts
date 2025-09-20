import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteTSConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTSConfigPaths()],
  server: {
    open: true,
    port: 5000,
  },
});
