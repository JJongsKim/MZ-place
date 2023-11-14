import { styled } from 'styled-components';

const ButtonWrap = styled.button`
  width: 280px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.green};
`;

const ButtonText = styled.p`
  color: white;
  ${({ theme }) => theme.font.B_15};
`;

export { ButtonWrap, ButtonText };
