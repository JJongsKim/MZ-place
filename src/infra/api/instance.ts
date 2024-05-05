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
  result: T;
  reviews: ReviewDataType[];
  recommendations?: T;
  hearts?: HeartPlacesType[];
  message: string;
  total_places?: number;
  totalItems?: number;
  nickname?: string;
  name: string;
  naver_id: string;
  ACCESS_TOKEN?: string;
}

interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;

  post<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;

  put<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;

  delete<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: API,
  headers: {},
});

export { instance };
