import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { join } from 'path';
import { device_id } from './src/utils/machine-id';
import { URL } from './src/assets/base_info';

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
          resolveStyle: (name: any) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name: any) => {
            return `element-plus/lib/${name}`;
          }
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
    host: 'localhost',
    port: 3000
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  define: {
    __APP_DEVICE_ID__: JSON.stringify(device_id),
    __APP_API_URL__: JSON.stringify(URL)
  }
});
console.log(JSON.stringify(device_id));
