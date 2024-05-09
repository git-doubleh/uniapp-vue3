/*
 * @Description: 
 * @Date: 2024-05-09 09:03:23
 * @LastEditTime: 2024-05-09 13:56:15
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'node:path'
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/global.scss";',
      },
    },
  }
});
