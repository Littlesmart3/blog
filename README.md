

# Vue3 + TS + Vite2 + element⁺ 项目搭建



## 1. 初化化项目

用 vite-app 创建项目

```shell
yarn create vite-app 
```
进入项目，安装依赖

```shell
yarn
```

运行项目

```shell
yarn dev
```



## 2. 引入 TypeScript

加入 ts 依赖

```shell
yarn add --dev typescript
```

在项目根目录下创建 TypeScript 的配置文件 tsconfig.json

```json
{
  "compilerOptions": {
    // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
    "allowSyntheticDefaultImports": true,
    
    // 解析非相对模块名的基准目录
    "baseUrl": ".",

    "esModuleInterop": true,

    // 从 tslib 导入辅助工具函数（比如 __extends， __rest等）
    "importHelpers": true,

    // 指定生成哪个模块系统代码
    "module": "esnext",

    // 决定如何处理模块。
    "moduleResolution": "node",

    // 启用所有严格类型检查选项。
    // 启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， 
    // --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
    "strict": true,

    // 生成相应的 .map文件。
    "sourceMap": true,

    // 忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,

    // 指定ECMAScript目标版本 
    "target": "esnext",
    
    // 要包含的类型声明文件名列表
    "types": [

    ],

    "isolatedModules": true,

    // 模块名到基于 baseUrl的路径映射的列表。
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    // 编译过程中需要引入的库文件的列表。
    "lib": [
      "ESNext",
      "DOM",
      "DOM.Iterable",
      "ScriptHost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

在 src 目录下新加 shim.d.ts 文件

```typescript
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

把 main.js 修改成 main.ts

在根目录，打开 Index.html

```javascript
<script type="module" src="/src/main.js"></script>
修改为：
<script type="module" src="/src/main.ts"></script>
```



## 3. 引入 eslint

安装 eslint prettier 依赖

```shell
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescr ipt-eslint/eslint-plugin
```

在根目录下建立 eslint 配置文件： .eslintrc.js

```typescript
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};

```

建立 prettier.config.js

```typescript
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
}
```



## 4. vue-router、vuex

```shell
yarn add vue-router@next vuex@next
```



### 4.1 vuex

在根目录下创建 store/index.ts

```pf
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
```



## 5. 加入 Element Plus

### 5.1 安装 element-plus

全局安装

```shell
yarn add element-plus --save
```



### 5.2 引入 Element Plus

**完整引入**

在 main.js 中写入以下内容：

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { store, key } from './store'
import router from "./router";
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(store, key).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app');
```

以上代码便完成了 Element Plus 的引入。



### 5.4 配置 vite.config.ts



其中 proxy 和 alias 是和 vue-cli 区别比较大的地方。

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

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
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
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
    port: 3001,
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
        rewrite: (pathStr) => pathStr.replace('/api', '')
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, "./src/less"),
      assets: path.resolve(__dirname, "./src/assets"),
      com: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
      mixins: path.resolve(__dirname, "./src/mixins")
    },
  }
})
```







参考资料：

https://developers.weixin.qq.com/community/develop/article/doc/000e6a264dcef8f8cf1caf3d25c013