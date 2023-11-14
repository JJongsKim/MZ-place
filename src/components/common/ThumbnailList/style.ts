import { styled } from 'styled-components';

const ThumbnailListWrap = styled.section`
  width: 375px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  row-gap: 20px;
  padding: 0 18px;
  margin-bottom: 100px;
`;

export { ThumbnailListWrap };
