import { styled } from 'styled-components';

const ExplainPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailBoxWrap = styled.div`
  position: relative;
  width: 330px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 260px;
  }
`;

const ThumbnailBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LikeIcon = styled.img`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 26px;
    height: 22px;
  }
`;

const LocationTitle = styled.p`
  padding: 20px 0 30px;
  ${({ theme }) => theme.font.B_20};

  @media screen and (min-width: 1200px) {
    padding: 30px 0 40px;
    ${({ theme }) => theme.font.B_22};
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 0 25px;

  li {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    margin-bottom: 50px;
  }
`;

const InfoTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

const InfoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0 26px 0 15px;
`;

const InfoIcon = styled.img``;

const InfoText = styled.p`
  ${({ theme }) => theme.font.B_16}

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_18}
  }
`;

export {
  ExplainPageWrap,
  ThumbnailBoxWrap,
  ThumbnailBox,
  LikeIcon,
  LocationTitle,
  InfoList,
  InfoTextWrap,
  InfoIconWrap,
  InfoIcon,
  InfoText,
};
