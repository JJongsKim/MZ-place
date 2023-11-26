import { styled } from 'styled-components';

const Thumbnail = styled.article`
  position: relative;
  z-index: 2;
`;

const ThumbWrap = styled.div<{
  $imageSrc?: string;
  $defaultImageSrc: string;
}>`
  width: 150px;
  height: 100px;
  border-radius: 20px;
  border: 1px solid #efefef;
  background: ${({ $imageSrc, $defaultImageSrc }) =>
    $imageSrc ? `url(${$imageSrc})` : `url(${$defaultImageSrc})`};
  background-size: cover;
  background-position: center;
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
  width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ theme }) => theme.font.M_12};
`;

const LikeIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 18px;
    fill: #606060;
  }
`;

export { Thumbnail, ThumbWrap, ThumbLabel, LabelText, LikeIcon };
