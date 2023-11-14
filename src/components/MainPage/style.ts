import { styled } from 'styled-components';

const AutoSlideWrap = styled.div`
  position: relative;
  width: 340px;
  height: 170px;
  border-radius: 10px;
  margin: 45px 0 35px;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    margin: 15px 0 25px;
    width: 340px;
    height: 200px;
  }
`;

const SlideImageList = styled.ul`
  display: flex;
  transition: transform 1.3s ease-in-out;
`;

const SlideImage = styled.img`
  width: 340px;
  height: 170px;
  object-fit: cover;

  @media screen and (min-width: 1200px) {
    width: 340px;
    height: 200px;
  }
`;

const SlideText = styled.p<{
  imgidx: number;
}>`
  position: absolute;
  left: 15px;
  bottom: 20px;
  color: ${({ imgidx }) => (imgidx === 1 || imgidx === 3 ? '#202020' : 'white')};
  ${({ theme }) => theme.font.B_16};

  transition: color 2s ease-in-out;
`;

export { AutoSlideWrap, SlideImageList, SlideImage, SlideText };
