import { styled } from 'styled-components';

const ModalView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(90, 90, 90, 0.6);
`;

const ModalContainer = styled.div`
  padding: 20px 30px;
  width: 320px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
`;

export { ModalView, ModalBackground, ModalContainer };
