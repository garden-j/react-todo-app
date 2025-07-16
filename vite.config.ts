import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-todo-app/", // <-- 여기에 꼭 추가
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
