import { faas, AnyObject } from '../index';

export class HomeAPI {
  // 导航栏
  static navList(params: AnyObject): Promise<any> {
    return faas.get('/mysql', { params });
  }
}
