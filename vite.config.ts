import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-masterclass/react-todo-app/", // <-- 여기에 꼭 추가
  plugins: [react()],
});
