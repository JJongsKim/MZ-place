import { keyframes, styled } from 'styled-components';

const ToastAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(20%);
  }
  100% {
    opacity: 0;
  }
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const ToastWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 150px;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: white;

  z-index: 5;
  animation: ${ToastAnimation};
  animation-duration: 2.2s;
`;

const ToastContent = styled.div`
  ${({ theme }) => theme.font.B_14};
`;

export { ToastContainer, ToastWrap, ToastContent };
