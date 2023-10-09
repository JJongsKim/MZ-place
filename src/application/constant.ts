import Home from '@assets/home.svg';
import Search from '@assets/search.svg';
import Like from '@assets/like-empty.svg';
import MyPage from '@assets/my-page.svg';

// import { ReactComponent as Home } from '@assets/home.svg';
// import { ReactComponent as Search } from '@assets/search.svg';
// import { ReactComponent as Like } from '@assets/like-empty.svg';
// import { ReactComponent as MyPage } from '@assets/my-page.svg';
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
