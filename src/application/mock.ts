import Pin from '@assets/pin.svg';
import Time from '@assets/time.svg';
import Phone from '@assets/phone.svg';
import InfoCost from '@assets/info-cost.svg';

export const MOCKUP1 = [
  {
    title: '김수정 데뷔쇼',
    like: false,
    path: '',
  },
  {
    title: '목업데이터2',
    like: false,
    path: '',
  },
  {
    title: '목업데이터3',
    like: true,
    path: '',
  },
  {
    title: '목업데이터4',
    like: false,
    path: '',
  },
  {
    title: '목업데이터5',
    like: false,
    path: '',
  },
  {
    title: '목업데이터6',
    like: false,
    path: '',
  },
  {
    title: '목업데이터7',
    like: true,
    path: '',
  },
];

export const MOCKUP2 = [
  {
    type: 'location',
    svg: Pin,
    content: '서울특별시 성북구 어쩌구저쩌구',
  },
  {
    type: 'phone',
    svg: Phone,
    content: '010-1111-1111',
  },
  {
    type: 'time',
    svg: Time,
    content: '오후 3시',
  },
  {
    type: 'cost',
    svg: InfoCost,
    content: '1,000 원',
  },
];
