import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/vars/index.scss";
        `
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
