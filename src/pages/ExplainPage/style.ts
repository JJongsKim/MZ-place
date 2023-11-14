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
`;

const ThumbnailBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LikeIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    fill: #606060;
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
  margin-bottom: 80px;

  li {
    margin-bottom: 60px;
  }
  li:nth-child(1) {
    margin-bottom: 40px;
  }
  li:nth-child(2) {
    margin-bottom: 40px;
  }
`;

const InfoTextWrap = styled.div`
  position: relative;
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

const InfoIcon = styled.img`
  width: 20px;
  height: 24px;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.font.M_14}

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.M_16}
  }
`;

const CopyButtonWrap = styled.div`
  display: flex;
  padding: 10px 0 0 35px;
`;

const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #eee;
  ${({ theme }) => theme.font.M_12};
  cursor: pointer;
`;

const MapWrap = styled.div`
  width: 280px;
  height: 180px;
  margin: 10px 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 320px;
    height: 220px;
    margin: 15px 4px 0;
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
  CopyButtonWrap,
  CopyButton,
  MapWrap,
};
