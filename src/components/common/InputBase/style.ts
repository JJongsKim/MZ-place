import { styled } from 'styled-components';

const InputWrap = styled.input`
  width: 280px;
  height: 50px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text_gray};
  padding: 0 20px;
  ${({ theme }) => theme.font.M_12};

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 62px;
    padding: 0 30px;
    ${({ theme }) => theme.font.M_14};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;

export { InputWrap };
