import { styled } from 'styled-components';

const ThumbnailListWrap = styled.section`
  width: 375px;
  height: 800px;
  overflow: scroll;
  padding: 0 18px;
`;

const ThumbnailContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  row-gap: 20px;
`;

const NextFetchTarget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.olive_green};
  ${({ theme }) => theme.font.B_14};
`;

export { ThumbnailListWrap, ThumbnailContentArea, NextFetchTarget };
