import { styled } from 'styled-components';

const MainPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    width: 850px;
    margin: 0 auto;
  }
`;

const RecommendTextWrap = styled.div`
  width: 375px;
  padding: 0 25px;

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    width: 900px;
    margin-bottom: 18px;
  }
`;

const RecommendText = styled.p`
  margin-bottom: 8px;
  ${({ theme }) => theme.font.M_18};

  @media screen and (min-width: 1200px) {
    margin: 0 5px 0;
    ${({ theme }) => theme.font.M_20};
  }
`;

const RecommendTop20 = styled.p`
  margin-bottom: 20px;
  ${({ theme }) => theme.font.B_24};

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    ${({ theme }) => theme.font.B_26};
  }
`;

export { MainPageWrap, RecommendTextWrap, RecommendText, RecommendTop20 };
