import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name:any) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name:any) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ],

  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
  * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
  * @default 'dist'
  */
  // outDir: 'dist',
  server: {
    // hostname: '0.0.0.0',
    host: "localhost",
    port: 3000,
    // // 是否自动在浏览器打开
    // open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        ws: true,
        rewrite: (pathStr:any) => pathStr.replace('/api', '')
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': join(__dirname, 'src/render'),
      '@src': join(__dirname, 'src'),
      '@root': __dirname
    },
  }
})