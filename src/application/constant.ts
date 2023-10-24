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
import Map from '@assets/map.svg';
import LikeMenu from '@assets/like.svg';
import Custom from '@assets/custom-filter.svg';

import HealingImg1 from '../images/healing1-picture.jpg';
import HealingImg2 from '../images/healing2-picture.jpg';
import MapImg from '../images/map-picture.jpg';
import MuseumImg from '../images/museum-picture.jpg';
import PaintImg from '../images/paint-picture.jpg';

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
    path: 'cost',
  },
  {
    name: '힐링',
    svg: Healing,
    path: 'healing',
  },
  {
    name: '예술',
    svg: Art,
    path: 'art',
  },
  {
    name: '교육',
    svg: Edu,
    path: 'edu',
  },
  {
    name: '쇼핑',
    svg: Shop,
    path: 'shop',
  },
  {
    name: '행사',
    svg: Event,
    path: 'event',
  },
  {
    name: '핫플레이스',
    svg: HotPlace,
    path: 'hot-place',
  },
];

export const CUSTOM_MENU = [
  {
    name: '거리별 추천',
    svg: Map,
    path: 'map',
  },
  {
    name: '찜 기반 추천',
    svg: LikeMenu,
    path: 'like',
  },
  {
    name: '맞춤 필터',
    svg: Custom,
    path: 'custom',
  },
];

export const MINI_FILTER = [
  {
    type: '유료/무료',
    filters: ['유료', '무료'],
  },
];

export const ACTIVE_TASTE = [
  '취향1',
  '취향2',
  '취향3',
  '취향4',
  '취향5',
  '취향6',
  '취향7',
  '취향8',
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

export const AutoSlideImgs = [
  {
    name: 'healing1Img',
    src: HealingImg1,
  },
  {
    name: 'mapImg',
    src: MapImg,
  },
  {
    name: 'healing2Img',
    src: HealingImg2,
  },
  {
    name: 'museumImg',
    src: MuseumImg,
  },
  {
    name: 'paintImg',
    src: PaintImg,
  },
];

export const MIN_Y = 200; // bottom sheet 최대로 높이 올라간 y 값
export const MAX_Y = window.innerHeight - 80; // bottom sheet 높이 최대로 내려간 y 값
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;
