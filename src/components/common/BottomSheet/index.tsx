import { styled } from 'styled-components';

const BottomSheet = () => {
  return (
    <BottomSheetWrap>
      <HandleWrap>
        <HandleIcon />
      </HandleWrap>
    </BottomSheetWrap>
  );
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
  height: 40px;
  border-radius: 30px 30px 0 0;
  background-color: white;

  @media screen and (min-width: 1200px) {
    width: 850px;
    margin: 0 auto;
    bottom: 100px;
  }
`;

const HandleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 30px 30px 0 0;
  background-color: #f3f3f3;
  cursor: pointer;
`;

const HandleIcon = styled.div`
  width: 100px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.text_gray};
`;

export default BottomSheet;
