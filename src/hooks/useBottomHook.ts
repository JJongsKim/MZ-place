/* eslint-disable @typescript-eslint/no-unused-vars */
import { MAX_Y, MIN_Y } from '@application/constant';
import { current } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';

/*

[Bottom Sheet에 사용되는 개념 설명]

TouchEvent에는 touchstart, touchmove, touchend 3가지 속성이 존재

- touchstart: 현재 바텀시트 위치와 터치 포인트 위치를 기록
- touchmove: 이전 touchmove와 비교 후 터치 포인트가 어느 방향으로 진행 중인지, 얼만큼 진행되었는지 계산하고 기록.
그 후 바텀시트를 터치 포인트의 진행거리만큼 움직이도록 함.
- touchend: 유저가 터치 제거 시, 시트를 최상단으로 올리거나 최하단으로 내리는 애니메이션 트리거. 그 후 기록 초기화

*/

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchStart에서 bottom sheet의 최상단 모서리의 Y값
    touchY: number; // touchStart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 지정
    movingDirection: 'none' | 'down' | 'up'; // 유저가 터치를 움직이고 있는 방향
  };
}

export const useBottomSheet = () => {
  const sheet = useRef<HTMLDivElement>(null); // bottom sheet body DOM

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
  });

  // touch event
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;

      if (sheet.current !== null) {
        touchStart.sheetY = sheet.current.getBoundingClientRect().y;
        touchStart.touchY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }
      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      }
      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      // 터치 시작점에서부터 현재 터치 포인트까지의 변화된 Y값
      const touchOffset = currentTouch.clientY - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      if (nextSheetY <= MIN_Y) {
        nextSheetY = MIN_Y;
      }
      if (nextSheetY >= MAX_Y) {
        nextSheetY = MAX_Y;
      }

      // sheet 위치 갱신
      sheet.current?.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current?.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === 'down') {
          sheet.current?.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheet.current?.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
        }
      }

      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
      };
    };

    sheet.current?.addEventListener('touchstart', handleTouchStart);
    sheet.current?.addEventListener('touchmove', handleTouchMove);
    sheet.current?.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheet.current?.removeEventListener('touchstart', handleTouchStart);
      sheet.current?.removeEventListener('touchmove', handleTouchMove);
      sheet.current?.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { sheet };
};
