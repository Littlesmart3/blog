import { faas, AnyObject } from './index';

export class HomeAPI {
  // 导航栏
  static navList(): Promise<any> {
    return faas.get('/home/nav_list');
  }
}
