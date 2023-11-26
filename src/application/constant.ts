import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as Search } from '@assets/search.svg';
import { ReactComponent as Like } from '@assets/like-empty.svg';
import { ReactComponent as MyPage } from '@assets/my-page.svg';

import Healing from '@assets/healing.svg';
import Show from '@assets/show.svg';
import Art from '@assets/art.svg';
import Book from '@assets/book.svg';
import Event from '@assets/event.svg';
import Eating from '@assets/eating.svg';
import Culture from '@assets/culture.svg';
import Etc from '@assets/etc.svg';
import Map from '@assets/map.svg';
import LikeMenu from '@assets/like.svg';
import Custom from '@assets/custom-filter.svg';
import Course from '@assets/course.svg';

import HealingImg2 from '../images/healing2-picture.jpg';
import MapImg from '../images/map-picture.jpg';
import MuseumImg from '../images/museum-picture.jpg';
import PaintImg from '../images/paint-picture.jpg';

export const API = process.env.REACT_APP_SERVER_API;

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
    id: 1,
    name: '건강',
    svg: Healing,
    path: 'health',
  },
  {
    id: 2,
    name: '공연장',
    svg: Show,
    path: 'show',
  },
  {
    id: 3,
    name: '전시',
    svg: Art,
    path: 'art',
  },
  {
    id: 4,
    name: '도서',
    svg: Book,
    path: 'book',
  },
  {
    id: 5,
    name: '체험',
    svg: Event,
    path: 'event',
  },
  {
    id: 6,
    name: '맛집/카페',
    svg: Eating,
    path: 'eating',
  },
  {
    id: 7,
    name: '문화공간',
    svg: Culture,
    path: 'art',
  },
  {
    id: 8,
    name: '기타',
    svg: Etc,
    path: 'etc',
  },
];

export const CUSTOM_MENU = [
  {
    name: '미래유산코스',
    svg: Course,
    path: 'course',
  },
  {
    name: '거리별 추천',
    svg: Map,
    path: 'map',
  },
  {
    name: '찜 기반 추천',
    svg: LikeMenu,
    path: 'like-recommend',
  },
  {
    name: '맞춤 필터',
    svg: Custom,
    path: 'custom',
  },
];

export const COST_FILTER = [
  {
    id: 'pay',
    type: '유료',
  },
  {
    id: 'free',
    type: '무료',
  },
];

export const ACTIVE_TASTE = [
  {
    id: 1,
    name: '건강한',
  },
  {
    id: 2,
    name: '신나는',
  },
  {
    id: 3,
    name: '차분한',
  },
  {
    id: 4,
    name: '교육적인',
  },
  {
    id: 5,
    name: '전통적인',
  },
  {
    id: 6,
    name: '감성적인',
  },
  {
    id: 7,
    name: '맛있는',
  },
];

export const REGION_ARRAY = [
  {
    locationId: 0,
    locationName: '현 위치',
  },
  {
    locationId: 1,
    locationName: '강남구',
    latitude: 37.5172,
    longitude: 127.0473,
  },
  {
    locationId: 2,
    locationName: '강동구',
    latitude: 37.5304,
    longitude: 127.1237,
  },
  {
    locationId: 3,
    locationName: '강북구',
    latitude: 37.6395,
    longitude: 127.0255,
  },
  {
    locationId: 4,
    locationName: '강서구',
    latitude: 37.5658,
    longitude: 126.8225,
  },
  {
    locationId: 5,
    locationName: '구로구',
    latitude: 37.4954,
    longitude: 126.8581,
  },
  {
    locationId: 6,
    locationName: '금천구',
    latitude: 37.4565,
    longitude: 126.8954,
  },
  {
    locationId: 7,
    locationName: '관악구',
    latitude: 37.4654,
    longitude: 126.9436,
  },
  {
    locationId: 8,
    locationName: '광진구',
    latitude: 37.5381,
    longitude: 127.0835,
  },
  {
    locationId: 9,
    locationName: '노원구',
    latitude: 37.6542,
    longitude: 127.0568,
  },
  {
    locationId: 10,
    locationName: '도봉구',
    latitude: 37.6688,
    longitude: 127.0472,
  },
  {
    locationId: 11,
    locationName: '동대문구',
    latitude: 37.5744,
    longitude: 127.04,
  },
  {
    locationId: 12,
    locationName: '동작구',
    latitude: 37.512,
    longitude: 126.9397,
  },
  {
    locationId: 13,
    locationName: '마포구',
    latitude: 37.5636,
    longitude: 126.9086,
  },
  {
    locationId: 14,
    locationName: '서대문구',
    latitude: 37.5791,
    longitude: 126.9368,
  },
  {
    locationId: 15,
    locationName: '서초구',
    latitude: 37.4837,
    longitude: 127.0324,
  },
  {
    locationId: 16,
    locationName: '성동구',
    latitude: 37.55,
    longitude: 127.0414,
  },
  {
    locationId: 17,
    locationName: '성북구',
    latitude: 37.6065,
    longitude: 127.0276,
  },
  {
    locationId: 18,
    locationName: '송파구',
    latitude: 37.5145,
    longitude: 127.1058,
  },
  {
    locationId: 19,
    locationName: '양천구',
    latitude: 37.527,
    longitude: 126.856,
  },
  {
    locationId: 20,
    locationName: '영등포구',
    latitude: 37.5208,
    longitude: 126.9139,
  },
  {
    locationId: 21,
    locationName: '용산구',
    latitude: 37.5311,
    longitude: 126.9795,
  },
  {
    locationId: 22,
    locationName: '은평구',
    latitude: 37.6035,
    longitude: 126.9293,
  },
  {
    locationId: 23,
    locationName: '종로구',
    latitude: 37.5729,
    longitude: 126.9796,
  },
  {
    locationId: 24,
    locationName: '중구',
    latitude: 37.5641,
    longitude: 126.9978,
  },
  {
    locationId: 25,
    locationName: '중랑구',
    latitude: 37.6065,
    longitude: 127.0924,
  },
];

export const AutoSlideImgs = [
  {
    name: 'museumImg',
    src: MuseumImg,
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
    name: 'paintImg',
    src: PaintImg,
  },
];

export const MIN_Y = 200; // bottom sheet 최대로 높이 올라간 y 값
export const MAX_Y = window.innerHeight - 80; // bottom sheet 높이 최대로 내려간 y 값
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;
