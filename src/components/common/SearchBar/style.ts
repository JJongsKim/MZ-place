import { styled } from 'styled-components';

const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 14px;

  @media screen and (min-width: 1200px) {
    margin: 24px 0 20px;
  }
`;

const SearchBarItemWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 375px;
  margin-bottom: 10px;
`;

const SearchBarTitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const TitleText = styled.p`
  width: 320px;
  padding-left: 10px;
  line-height: 24px;
  ${({ theme }) => theme.font.B_20};
`;

const SearchBarLine = styled.hr`
  width: 350px;
  border: 0.8px solid ${({ theme }) => theme.colors.text_gray};
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
