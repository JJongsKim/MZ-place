import Layout from '@components/Layout';
import { getAccessToken, getKakaoId, getNaverId } from '@infra/api/token';
import KakaoOauthCallback from '@pages/Auth/kakao/kakaoOauthCallback';
import NaverOauthCallback from '@pages/Auth/naver/naverOauthCallback';
import SignIn from '@pages/Auth/signIn';
import SignUp from '@pages/Auth/signUp';
import CategoryPage from '@pages/DetailPage/CategoryPage';
import CoursePage from '@pages/DetailPage/CoursePage';
import CustomFilterPage from '@pages/DetailPage/CustomFilterPage';
import LikeRecommendPage from '@pages/DetailPage/LikeRecommendPage';
import MapPage from '@pages/DetailPage/MapPage';
import ExplainPage from '@pages/ExplainPage';
import LikePage from '@pages/LikePage';
import MainPage from '@pages/MainPage';
import MyPage from '@pages/MyPage';
import SearchPage from '@pages/SearchPage';
import { setUserId } from '@store/reducers/UserIdReducer';

import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state: StoreType) => state.UserIdReducer.userId);

  const token = getAccessToken();
  const kakaoId = getKakaoId();
  const naverId = getNaverId();

  useEffect(() => {
    if (token) {
      dispatch(setUserId({ local_token: token }));
    }
    if (kakaoId) {
      dispatch(setUserId({ kakao_id: kakaoId }));
    }
    if (naverId) {
      dispatch(setUserId({ naver_id: naverId }));
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<MainPage userId={userId} />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/:menuId" element={<CategoryPage />} />
              <Route path="/search/course" element={<CoursePage />} />
              <Route path="/search/map" element={<MapPage />} />
              <Route path="/search/like-recommend" element={<LikeRecommendPage />} />
              <Route path="/search/custom" element={<CustomFilterPage />} />
              <Route path="/place/:id" element={<ExplainPage />} />
              <Route
                path="/like"
                element={<LikePage key={null} type={undefined} props={undefined} />}
              />
              <Route
                path="/my-page"
                element={<MyPage key={null} type={undefined} props={undefined} />}
              />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/oauth" element={<KakaoOauthCallback />} />
            <Route path="/naver/oauth" element={<NaverOauthCallback />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
