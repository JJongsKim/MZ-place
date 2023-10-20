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

// 거리별 추천 페이지용
const MapPageWrap = styled.div`
  width: 100%;
`;

const MapPageDropdownWrap = styled.div`
  width: 375px;
  display: flex;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    width: 850px;
    margin-bottom: 50px;
  }
`;

export { DetailPageWrap, FilterList, DetailPageContentList, MapPageWrap, MapPageDropdownWrap };
