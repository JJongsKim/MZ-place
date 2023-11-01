import { ToastContainer, ToastContent, ToastWrap } from './style';

interface ToastProps {
  children: string;
}

const Toast = ({ children }: ToastProps) => {
  return (
    <ToastContainer>
      <ToastWrap>
        <ToastContent>{children}</ToastContent>
      </ToastWrap>
    </ToastContainer>
  );
};

export default Toast;
