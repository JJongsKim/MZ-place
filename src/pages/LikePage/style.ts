import { SearchBarLine, SearchBarWrap, TitleText } from '@components/common/SearchBar/style';

import { styled } from 'styled-components';

const LikePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikePageHeader = styled(SearchBarWrap)``;

const HeaderItemWrap = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  margin-top: 4px;
`;

const HeaderNameText = styled(TitleText)`
  padding: 3px 5px 3px 22px;
  color: ${({ theme }) => theme.colors.green};
`;

const HeaderText = styled.p`
  padding-top: 3px;
  ${({ theme }) => theme.font.B_15};
`;

const HeaderLine = styled(SearchBarLine)``;

const ContentArea = styled.section``;

export {
  LikePageWrap,
  LikePageHeader,
  HeaderItemWrap,
  HeaderNameText,
  HeaderText,
  HeaderLine,
  ContentArea,
};
