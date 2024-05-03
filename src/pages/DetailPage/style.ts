import { styled } from 'styled-components';

const DetailPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 10px;

  ul:nth-child(1) {
    padding-left: 28px;
  }
  ul:nth-child(2) {
    padding-left: 8px;
  }
`;

const FilterListLabel = styled.p`
  position: absolute;
  font-size: 0.8rem;
  font-weight: 600;
  top: -18px;
  padding: 0 2px;
`;

const FilterList = styled.ul`
  display: flex;
  position: relative;

  li {
    margin-right: 6px;
  }
`;

const DetailPageContentList = styled.section`
  margin: 10px 0 55px;
  height: 100%;

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
  FilterListWrap,
  FilterList,
  FilterListLabel,
  DetailPageContentList,
  MapPageWrap,
  MapPageDropdownWrap,
  CustomFilterPageWrap,
};
