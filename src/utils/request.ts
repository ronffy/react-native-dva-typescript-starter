import qs from  'qs';

const defaultOptions = {
  method: 'GET'
}

interface Interceptor {
  fulfilled: (config: any) => any;
  rejected: (error: any) => any;
}

type ChainItem = ((args: any) => any) | undefined;

interface RequestConfig {
  url: string;
  method: string;
  body?: any;
  headers?: any;
  [props: string]: any;
}

// 拦截器
// 使用方式见 https://www.kancloud.cn/yunye/axios/234845  拦截器篇
let interceptors = {
  request: [],
  response: [],
}




function dispatchRequest(config: RequestConfig): Promise<Response> {
  const {url, ...options} = config;
  
  // return fetch(url, options)
  // .then(response => response.json())

  return new Promise(res => {
    setTimeout(() => {
      res()
    }, 2000);
  })
}

const request = function (url: string, options: RequestInit = {}): Promise<any> {
  options = {
    ...defaultOptions,
    ...options,
  }

  let { method = 'GET', body } = options;

  if (method.toUpperCase() === 'GET' && body) {
    const params = qs.stringify(body);
    url = `${url}?${params}`;
    delete options.body;
  }

  const config: RequestConfig = {
    url,
    ...options,
  }

  return dispatchRequest(config);

  let chain: ChainItem[] = [dispatchRequest, undefined];
  let promise = Promise.resolve(config);

  interceptors.request.forEach(function unshiftRequestInterceptors(interceptor: Interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  interceptors.response.forEach(function pushResponseInterceptors(interceptor: Interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;

}

export {
  interceptors
}

export default request
