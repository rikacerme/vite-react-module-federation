import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp1: "http://localhost:5001/assets/remoteEntry.js", // Remote Uygulama URL
        remoteApp2: "http://localhost:5002/assets/remoteEntry.js", // Remote Uygulama URL
        // remoteApp1: "http://localhost:5173/remoteEntry.js", // Remote Uygulama URL
        // remoteApp2: "http://localhost:5174/remoteEntry.js", // Remote Uygulama URL
      },
      shared: ['react', "react-dom"]
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});

