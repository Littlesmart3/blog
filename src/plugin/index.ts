import { App } from 'vue';

import { auth } from './directive';
import Axios from './axios';
import setting from '@/util/setting.json';
import nldElement from '@/component/niulandi-element/index';
import msgbox from '@/util/nld-msgbox';
import * as precision from '@/util/precision';
import page_control from '@/util/routing-change';
import { storage } from '@/util/storage';
import { upload } from '@tugou/client';
import { oss } from '@/api/index';
import LayoutReport from '@/component/layout-report.vue';
import SearchArea from '@/component/search-area.vue';
import GoodInfor from '@/component/good-infor.vue';
import TitleContext from '@/component/title-context.vue';

const { VITE_FAAS } = __APP_ENV__;
const faas = new Axios({ base_url: VITE_FAAS, device_id: __APP_DEVICE_ID__ });

export default {
  install(app: App<Element>): void {
    // 全局实例属性方法
    app.config.globalProperties.$storage = storage;

    app.config.globalProperties.$page = page_control;

    app.config.globalProperties.$setting = setting;

    app.config.globalProperties.$msg = msgbox;

    app.config.globalProperties.$precision = precision;

    app.config.globalProperties.$faas = faas;

    app.config.globalProperties.$upload = (raw: any) => upload(faas, oss, raw);

    // 全局组件
    app.component('LayoutReport', LayoutReport);
    app.component('SearchArea', SearchArea);
    app.component('TitleContext', TitleContext);
    app.component('GoodInfor', GoodInfor);

    // nldElement
    Object.keys(nldElement).forEach((key) => app.component(key, nldElement[key]));

    // 鉴权指令
    app.directive('auth', auth);
  }
};
