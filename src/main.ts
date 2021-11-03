import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { store, key } from './store'
import router from "./router";
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(store, key).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app');
 