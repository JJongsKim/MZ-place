import { styled } from 'styled-components';

const DetailPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterList = styled.ul`
  display: flex;
  width: 375px;
  padding: 0 30px;

  li {
    margin-right: 6px;
  }
`;

const DetailPageContentList = styled.section`
  margin: 10px 0 55px;
  height: 100vh;

  @media screen and (min-width: 1200px) {
    margin-top: 12px;
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
  margin-bottom: 25px;
`;

// 맞춤 필터 추천 페이지용
const CustomFilterPageWrap = styled.div`
  width: 375px;
`;

export {
  DetailPageWrap,
  FilterList,
  DetailPageContentList,
  MapPageWrap,
  MapPageDropdownWrap,
  CustomFilterPageWrap,
};
