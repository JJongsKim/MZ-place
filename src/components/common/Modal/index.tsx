import Portal from './Portal';
import { ModalBackground, ModalContainer, ModalView } from './style';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <ModalView>
        <ModalBackground
          onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClickBackground(e)}
        >
          <ModalContainer>{children}</ModalContainer>
        </ModalBackground>
      </ModalView>
    </Portal>
  );
};

export default Modal;
