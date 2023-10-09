import { styled } from 'styled-components';

const InputWrap = styled.input`
  width: 280px;
  height: 50px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text_gray};
  padding-left: 15px;
  ${({ theme }) => theme.font.SB_12};

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 70px;
    ${({ theme }) => theme.font.SB_16};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;

export { InputWrap };
