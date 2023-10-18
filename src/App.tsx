import Layout from '@components/layout';
import SignIn from '@pages/Auth/signIn';
import SignUp from '@pages/Auth/signUp';
import DetailPage from '@pages/DetailPage';
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
              <Route path="/search/:menuId" element={<DetailPage />} />
              {/* TODO 다시 생각해보기. 게시글 라우터를 이렇게 가져가도 맞는건가? */}
              <Route path="/content/:id" element={<ExplainPage />} />
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
