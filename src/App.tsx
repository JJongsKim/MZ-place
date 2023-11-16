import Layout from '@components/Layout';
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

import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/:menuId" element={<CategoryPage />} />
              <Route path="/search/course" element={<CoursePage />} />
              <Route path="/search/map" element={<MapPage />} />
              <Route path="/search/like-recommend" element={<LikeRecommendPage />} />
              <Route path="/search/custom" element={<CustomFilterPage />} />
              {/* TODO 다시 생각해보기. 게시글 라우터를 이렇게 가져가도 맞는건가? */}
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
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
