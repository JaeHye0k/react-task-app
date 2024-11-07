import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
// https://vanilla-extract.style/documentation/integrations/vite/
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
});
