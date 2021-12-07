import service, { AxiosInstance, AxiosPromise, AxiosRequestConfig, Method, AxiosResponse, AxiosError } from 'axios';

interface Arguments {
  base_url: string;
  device_id: string;
  timeout?: number;
  init?: boolean;
}

class Axios {
  private readonly instance: AxiosInstance;
  private init: boolean;
  public request: (config: AxiosRequestConfig) => AxiosPromise;
  public get = this.setAxiosMethods('get');
  public post = this.setAxiosMethods('post');
  public delete = this.setAxiosMethods('delete');
  public put = this.setAxiosMethods('put');
  public head = this.setAxiosMethods('head');
  public patch = this.setAxiosMethods('patch');

  constructor({ base_url, device_id, timeout = 10000, init = false }: Arguments) {
    if (!base_url) throw new Error('请配置: { base_url }');

    this.init = init;
    this.request = async (config) => await this.instance.request(config);

    // 初始化 axios 实例
    const instance = service.create({
      baseURL: base_url,
      timeout,
      withCredentials: false,
      headers: {
        'x-device-id': device_id,
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    });

    // 请求拦截器
    instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    // 响应拦截器
    instance.interceptors.response.use(
      (response) => {
        const code = response.data.status;
        switch (code) {
          case 200:
            // [ 示例 ] code === 200 代表没有错误
            return response;
          case 400:
          case 400011:
          case 400012:
            return Promise.reject(response.data || { msg: '未知错误' });
          // [ 示例 ] 其它和后台约定的 code
          // errorCreate(response.data.msg);
          case 410000:
          case 410001:
          case 410002:
            // 未登陆
            return Promise.reject(response.data || { msg: '未登陆' });
          default:
            // 不是正确的 code
            // errorCreate(`${dataAxios.msg}: ${response.config.url}`);
            return Promise.reject(response.data || { msg: '不是正确的 code' });
        }
      },
      (error) => {
        console.log(error);

        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = '请求错误';
              break;
            case 401:
              error.message = '未授权，请登录';
              break;
            case 403:
              error.message = '拒绝访问';
              break;
            case 404:
              error.message = `请求地址出错: ${error.response.config.url}`;
              break;
            case 408:
              error.message = '请求超时';
              break;
            case 500:
              error.message = '服务器内部错误';
              break;
            case 501:
              error.message = '服务未实现';
              break;
            case 502:
              error.message = '网关错误';
              break;
            case 503:
              error.message = '服务不可用';
              break;
            case 504:
              error.message = '网关超时';
              break;
            case 505:
              error.message = 'HTTP版本不受支持';
              break;
            default:
              break;
          }
        }
      }
    );
    this.instance = instance;
  }

  private setAxiosMethods(method: Method) {
    return <R = any, Config = AxiosRequestConfig>(url: string, config?: Config): Promise<R> => {
      return new Promise((resolve, reject) => {
        this.instance[method](url, config)
          .then((response: AxiosResponse | undefined) => {
            if (!response) reject('获取数据失败！');
            else {
              if (response.status === 200) resolve(this.init ? response.data : response);
              else reject(response.data);
            }
          })
          .catch((error: AxiosError) => reject(error));
      });
    };
  }
}

export default Axios;
