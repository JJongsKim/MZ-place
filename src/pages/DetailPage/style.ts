import { styled } from 'styled-components';

const DetailPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 14px;

  li {
    margin-right: 6px;
  }

  @media screen and (min-width: 1200px) {
    width: 850px;

    li {
      margin-right: 20px;
    }
  }
`;

const DetailPageContentList = styled.section`
  margin-top: 24px;

  @media screen and (min-width: 1200px) {
    margin-top: 40px;
  }
`;

export { DetailPageWrap, FilterList, DetailPageContentList };
