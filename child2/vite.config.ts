import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
//4173
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp2",
      filename: "remoteEntry.js", // Module Federation manifest dosyası
      exposes: {
        "./App": "./src/App.tsx", // Expose edilen bileşen
      },
      shared: ['react', "react-dom"]
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*", 
    },
  },
  preview: {
    headers: {
      "Access-Control-Allow-Origin": "*", 
    },
  },
});

