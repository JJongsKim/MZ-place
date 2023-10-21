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
    width: 520px;
    height: 230px;
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
    width: 520px;
    height: 230px;
  }
`;

const SlideText = styled.p<{
  imgIdx?: number;
}>`
  position: absolute;
  left: 15px;
  bottom: 20px;
  color: ${({ imgIdx }) => (imgIdx === 1 || imgIdx === 3 ? '#202020' : 'white')};
  ${({ theme }) => theme.font.SB_18};

  transition: color 2s ease-in-out;

  @media screen and (min-width: 1200px) {
    left: 20px;
    ${({ theme }) => theme.font.SB_22};
  }
`;

export { AutoSlideWrap, SlideImageList, SlideImage, SlideText };
