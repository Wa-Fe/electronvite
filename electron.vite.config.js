import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import vue from "@vitejs/plugin-vue"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@": resolve("src/renderer/src")
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"]
        // resolvers: [ElementPlusResolver()]
      }),
      Components({
        // "resolvers": [ElementPlusResolver({ importStyle: true })],
        // 自动导入的路径
        dirs: ["src/renderer/src/components"],
        // 按需引入的文件的类型
        extensions: ["vue"]
      })
    ],
  }
})
