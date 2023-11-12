import { styled } from 'styled-components';

const ButtonWrap = styled.button`
  width: 280px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.green};

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 62px;
  }
`;

const ButtonText = styled.p`
  color: white;
  ${({ theme }) => theme.font.B_15};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_18};
  }
`;

export { ButtonWrap, ButtonText };
