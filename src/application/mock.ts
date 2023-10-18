import Pin from '@assets/pin.svg';
import Time from '@assets/time.svg';
import Phone from '@assets/phone.svg';
import InfoCost from '@assets/info-cost.svg';

export const MOCKUP1 = [
  {
    title: '김수정 데뷔쇼',
    like: false,
    id: 1,
    infos: [
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
    ],
  },
  {
    title: '목업데이터2',
    like: false,
    id: 2,
    infos: [
      {
        type: 'location',
        svg: Pin,
        content: '서울특별시 강남구 메롱메롱',
      },
      {
        type: 'phone',
        svg: Phone,
        content: '02-2222-2222',
      },
    ],
  },
  {
    title: '목업데이터3',
    like: true,
    id: 3,
  },
  {
    title: '목업데이터4',
    like: false,
    id: 4,
  },
  {
    title: '목업데이터5',
    like: false,
    id: 5,
  },
  {
    title: '목업데이터6',
    like: false,
    id: 6,
  },
  {
    title: '목업데이터7',
    like: true,
    id: 7,
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
