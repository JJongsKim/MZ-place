import { styled } from 'styled-components';

const WarningWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
`;

const WarningIcon = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 1200px) {
    width: 80px;
    height: 80px;
  }
`;

const WarningText = styled.p`
  margin-top: 20px;
  ${({ theme }) => theme.font.B_16};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_22};
  }
`;

export { WarningWrap, WarningIcon, WarningText };
