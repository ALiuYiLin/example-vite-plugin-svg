import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs:[path.resolve(__dirname,'src/assets/icons')], //SVG 图标目录
      symbolId: 'icon-[dir]-[name]' //符号ID格式
    })
  ],
})
