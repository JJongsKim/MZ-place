import Home from '@assets/home.svg';
import Search from '@assets/search.svg';
import Like from '@assets/like-empty.svg';
import MyPage from '@assets/my-page.svg';

import type { NavType } from '../types';

export const NAV_ARRAY: NavType[] = [
  {
    name: '홈',
    svg: Home,
    path: '/',
  },
  {
    name: '탐색',
    svg: Search,
    path: '/search',
  },
  {
    name: '찜',
    svg: Like,
    path: '/like',
  },
  {
    name: '마이페이지',
    svg: MyPage,
    path: '/my-page',
  },
];

export const REGION_ARRAY = [
  '강동구',
  '강남구',
  '강북구',
  '강서구',
  '구로구',
  '금천구',
  '강동구',
  '광진구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];
