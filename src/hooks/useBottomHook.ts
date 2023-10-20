import { useEffect, useRef, useState } from 'react';

export default function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);

  const [clickSheet, isClickSheet] = useState(false);

  const handleClickSheet = () => {
    isClickSheet(!clickSheet);
  };

  useEffect(() => {
    if (sheet.current) {
      if (clickSheet) {
        // bottom sheet UP
        sheet.current.style.setProperty('transform', `translateY(-85%)`);
        document.body.style.overflowY = 'hidden';
      } else {
        // bottom sheet DOWN
        sheet.current.style.setProperty('transform', `translateY(0)`);
        document.body.style.overflowY = 'scroll';
      }
    }
  }, [clickSheet]);

  return { sheet, handleClickSheet };
}
