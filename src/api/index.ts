import { reactive as _reactive } from 'vue';
import Axios from './axios';

const VITE_FAAS = __APP_API_URL__;

export interface AnyObject {
  [propertys: string]: any;
}

export const faas: Axios = new Axios({ base_url: VITE_FAAS, device_id: __APP_DEVICE_ID__, init: true, timeout: 6000 });
