import { styled } from 'styled-components';

const ThumbWrap = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  background-color: #c4c4c4;
  cursor: pointer;
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
`;

const LabelText = styled.p`
  ${({ theme }) => theme.font.M_12};
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
`;

export { ThumbWrap, ThumbLabel, LabelText, LikeIcon };
