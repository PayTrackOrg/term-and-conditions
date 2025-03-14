// Ejemplo de vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Asegúrate de que esto coincida con tu homepage
  plugins: [react()],
});
