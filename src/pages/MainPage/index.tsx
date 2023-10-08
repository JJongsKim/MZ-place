import { styled } from 'styled-components';

const MainPage = () => {
  return <Test>테스트1</Test>;
};

const Test = styled.div`
  color: ${({ theme }) => theme.colors.green};
`;

export default MainPage;
