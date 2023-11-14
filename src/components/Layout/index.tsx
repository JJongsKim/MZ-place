import { Outlet } from 'react-router-dom';

import Header from '@components/common/Header';
import Navigation from '@components/common/Navigation';

import { styled } from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrap>
      <Header />
      <ContentBackground>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </ContentBackground>
      <Navigation />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ContentBackground = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const ContentArea = styled.main`
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 60px;
  background-color: white;

  @media screen and (min-width: 1200px) {
    padding-top: 80px;
  }
`;

export default Layout;
