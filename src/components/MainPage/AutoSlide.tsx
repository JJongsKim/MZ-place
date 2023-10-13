import { AutoSlideImgs } from '@application/constant';
import { AutoSlideWrap, SlideImage, SlideImageList, SlideText } from './style';
import { useEffect, useRef, useState } from 'react';

const AutoSlide = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setImgIdx(prev => (prev === AutoSlideImgs.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const slideAnimation = {
    transform: `translateX(-${imgIdx * 100}%)`,
  };

  return (
    <AutoSlideWrap>
      <SlideImageList ref={slideRef} style={slideAnimation}>
        {AutoSlideImgs.map(img => (
          <li key={img.name}>
            <SlideImage src={img.src} alt="슬라이드이미지" />
          </li>
        ))}
      </SlideImageList>
      <SlideText imgIdx={imgIdx}>🔍 취향에 맞는 장소를 찾아보세요!</SlideText>
    </AutoSlideWrap>
  );
};

export default AutoSlide;
