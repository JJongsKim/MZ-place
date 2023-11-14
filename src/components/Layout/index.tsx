import { Outlet } from 'react-router-dom';

import Header from '@components/common/Header';
import Navigation from '@components/common/Navigation';

import { styled } from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrap>
      <Header />
      <ContentArea>
        <Outlet />
      </ContentArea>
      <Navigation />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ContentArea = styled.main`
  padding-top: 60px;

  @media screen and (min-width: 1200px) {
    padding-top: 80px;
  }
`;

export default Layout;
