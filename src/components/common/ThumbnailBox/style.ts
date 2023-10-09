import { styled } from 'styled-components';

const ThumbWrap = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  background-color: #c4c4c4;

  @media screen and (min-width: 1200px) {
    width: 330px;
    height: 220px;
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
    height: 55px;
    padding: 0 20px;
  }
`;

const LabelText = styled.p`
  ${({ theme }) => theme.font.M_12};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.M_18};
  }
`;

const LikeIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 12px;
  width: 20px;
  height: 18px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 28px;
    top: 20px;
    right: 24px;
  }
`;

export { ThumbWrap, ThumbLabel, LabelText, LikeIcon };
