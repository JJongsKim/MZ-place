/* eslint-disable @typescript-eslint/no-explicit-any */

/* 
  인터셉터 : then, catch로 처리되기 전 요청과 응답 가로채기
  API fectching때마다 자동으로 함수가 실행된다.
  typescript에서 좀 더 편하게 axios 사용하도록 설정해놓음!
*/

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { API } from '@application/constant';

interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: API,
  withCredentials: true,
  headers: {},
});

// 요청 인터셉터
instance.interceptors.request.use(req => {
  console.log('🗣 request -> ', req);
  return req;
});

// 응답 인터셉터
instance.interceptors.response.use(
  res => {
    console.log('📍 response -> ', res);
    return res;
  },
  async err => {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;

      // 임시 코드
      if (status === 400) {
        console.log('데이터가 존재하지 않아요!');
      }
      if (status === 404) {
        console.log('잘못된 값을 넣었어요!');
      }
    }
    return Promise.reject(err);
  },
);

export { instance };
