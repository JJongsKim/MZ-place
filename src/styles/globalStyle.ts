import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: pretendard;
    font-weight: 400; 
    src: url('/fonts/Pretendard-Regular.ttf');
  }
  @font-face {
    font-family: pretendard;
    font-weight: 500; 
    src: url('/fonts/Pretendard-Medium.ttf');
  }
  @font-face {
    font-family: pretendard;
    font-weight: 600; 
    src: url('/fonts/Pretendard-SemiBold.ttf');
  }
  @font-face {
    font-family: pretendard;
    font-weight: 700; 
    src: url('/fonts/Pretendard-Bold.ttf');
  }


  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: 'pretendard', sans-serif;
  }

  * {
    box-sizing: border-box;
    
    ::-webkit-scrollbar {
      display: none !important;
    }
  }

  a,
  a:hover,
  a:focus,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
  }

  span,
  label {
    display: inline-block;
  }

  p {
    margin: 0;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: transparent none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
