import { styled } from 'styled-components';

const MainPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendTextWrap = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  padding: 0 25px;
  margin-bottom: 20px;
`;

const RecommendText = styled.p`
  margin-right: 5px;
  ${({ theme }) => theme.font.M_16};
`;

const RecommendTop20 = styled.p`
  ${({ theme }) => theme.font.B_22};
`;

const ContentWrap = styled.section`
  height: 500px;
  margin-bottom: 50px;
  overflow: scroll;
`;

export { MainPageWrap, RecommendTextWrap, RecommendText, RecommendTop20, ContentWrap };
