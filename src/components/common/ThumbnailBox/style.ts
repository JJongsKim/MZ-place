import { styled } from 'styled-components';

const ThumbWrap = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  background-color: #c4c4c4;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 260px;
    height: 160px;
  }
`;

const ThumbLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  padding: 0 10px;
  border-radius: 0 0 20px 20px;
  background-color: #efefef;

  @media screen and (min-width: 1200px) {
    height: 40px;
    padding: 0 20px;
  }
`;

const LabelText = styled.p`
  ${({ theme }) => theme.font.M_12};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.M_14};
  }
`;

const LikeIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 18px;
    fill: #606060;
  }

  @media screen and (min-width: 1200px) {
    width: 24px;
    height: 22px;
    top: 15px;
    right: 20px;
  }
`;

export { ThumbWrap, ThumbLabel, LabelText, LikeIcon };
