import { styled } from 'styled-components';

const WarningWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
`;

const WarningIcon = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

const WarningText = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.B_16};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_20};
  }
`;

export { WarningWrap, WarningIcon, WarningText };
