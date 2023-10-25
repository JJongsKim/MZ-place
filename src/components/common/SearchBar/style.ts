import { styled } from 'styled-components';

const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media screen and (min-width: 1200px) {
    margin: 24px 0 20px;
  }
`;

const SearchBarItemWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 375px;

  @media screen and (min-width: 1200px) {
    width: 850px;
  }
`;

const SearchBarTitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const TitleText = styled.p`
  ${({ theme }) => theme.font.B_22};
  padding-left: 6px;

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_24};
    padding-left: 8px;
  }
`;

const SearchBarLine = styled.hr`
  width: 350px;
  color: ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 850px;
  }
`;

const BackIcon = styled.img`
  width: 24px;
  height: 12px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 25px;
    height: 14px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3px;
  right: 22px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 22px;
    height: 22px;
  }
`;

export {
  SearchBarWrap,
  SearchBarItemWrap,
  SearchBarTitleWrap,
  TitleText,
  SearchBarLine,
  BackIcon,
  SearchIcon,
};
