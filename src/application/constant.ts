import Home from '@assets/home.svg';
import Search from '@assets/search.svg';
import Like from '@assets/like-empty.svg';
import MyPage from '@assets/my-page.svg';
import Cost from '@assets/cost.svg';
import Healing from '@assets/healing.svg';
import Art from '@assets/art.svg';
import Edu from '@assets/edu.svg';
import Shop from '@assets/shop.svg';
import Event from '@assets/event.svg';
import HotPlace from '@assets/hot-place.svg';
import Personnel from '@assets/personnel.svg';
import Map from '@assets/map.svg';
import LikeMenu from '@assets/like.svg';
import Custom from '@assets/custom-filter.svg';

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

export const MENU = [
  {
    name: '유료/무료',
    svg: Cost,
    path: '',
  },
  {
    name: '힐링',
    svg: Healing,
    path: '',
  },
  {
    name: '예술',
    svg: Art,
    path: '',
  },
  {
    name: '교육',
    svg: Edu,
    path: '',
  },
  {
    name: '쇼핑',
    svg: Shop,
    path: '',
  },
  {
    name: '행사',
    svg: Event,
    path: '',
  },
  {
    name: '핫플레이스',
    svg: HotPlace,
    path: '',
  },
];

export const CUSTOM_MENU = [
  {
    name: '인원별 추천',
    svg: Personnel,
    path: '',
  },
  {
    name: '거리별 추천',
    svg: Map,
    path: '',
  },
  {
    name: '찜 기반 추천',
    svg: LikeMenu,
    path: '',
  },
  {
    name: '맞춤 필터',
    svg: Custom,
    path: '',
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
