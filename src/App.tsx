import MainPage from '@pages/MainPage';
import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
