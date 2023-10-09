import { styled } from 'styled-components';
import mzLogo from '@assets/mz-logo.svg';

const MainPage = () => {
  return (
    <Test>
      <img src={mzLogo} />
    </Test>
  );
};

const Test = styled.div`
  color: ${({ theme }) => theme.colors.green};
`;

export default MainPage;
