
import { request, strTemplate } from '../utils';
import { API } from '../config';

export const login = () => {
  return request(API.test1)
}


export const requestChangeText = (name: string) => {
  return new Promise(res => {
    setTimeout(() => {
      res(name)
    }, 1000);
  })
  // return request(API.test1, {
  //   body: {
  //     name
  //   }
  // })
}


/**
 * 请求测试接口，get请求带参数时，传参方式同post请求
 * @param body 
 */
interface Test1Body {
  type: string;
  source: string;
}
export function requestTest1(body: Test1Body) {
  return request(API.test1, {
    body
  })
}

/**
 * 请求测试接口，RESTful接口，路径中需要注入数据时，传参方式同post请求
 * @param body 
 */
interface Test2Data {
  name: string;
  age: number;
  sex: string;
}
export function requestTest2(data: Test2Data) {
  const { name, ...body } = data;
  const url = strTemplate(API.test2, {
    name
  });
  return request(url, {
    body
  })
}


