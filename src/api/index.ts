/*
 * @Author: your name
 * @Date: 2021-12-02 16:00:33
 * @LastEditTime: 2021-12-07 10:21:49
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog-client/src/api/index.ts
 */
import { reactive as _reactive } from 'vue';
import Axios from '@/plugin/axios';

const VITE_FAAS = __APP_API_URL__;

export interface AnyObject {
  [propertys: string]: any;
}

export const faas: Axios = new Axios({ base_url: VITE_FAAS, device_id: __APP_DEVICE_ID__, init: true, timeout: 6000 });
