import { styled } from 'styled-components';

const ButtonWrap = styled.button`
  width: 280px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.green};

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 70px;
  }
`;

const ButtonText = styled.p`
  color: white;
  ${({ theme }) => theme.font.SB_16};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.SB_20};
  }
`;

export { ButtonWrap, ButtonText };
