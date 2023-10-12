import { styled } from 'styled-components';

const ThumbnailListWrap = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  row-gap: 20px;

  @media screen and (min-width: 1200px) {
    width: 1200px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { ThumbnailListWrap };
