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
  border: 1px solid #efefef;
  background-color: #efefef;
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

  svg {
    fill: #606060;
  }
`;

const LocationTitle = styled.p`
  text-align: center;
  padding: 20px 20px 30px;
  ${({ theme }) => theme.font.B_16};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_18};
  }
`;

export { ExplainPageWrap, ThumbnailBoxWrap, ThumbnailBox, LikeIcon, LocationTitle };
