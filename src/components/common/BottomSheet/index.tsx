import { styled } from 'styled-components';

const BottomSheet = () => {
  return <BottomSheetWrap>바텀시트에욧!!!</BottomSheetWrap>;
};

const BottomSheetWrap = styled.div`
  display: flex;
  flex-direction: column; // 바텀시트의 핸들, body 세로정렬
  position: fixed;
  left: 0;
  right: 0;
  bottom: 80px;
  z-index: 5;
  width: 375px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 850px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default BottomSheet;
