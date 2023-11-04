import withAuth from '@components/HOC/withAuth';

import {
  DivideLine,
  FirstSection,
  InfoText,
  ModalBox,
  MyPageJobList,
  MyPageWrap,
  SelectBox,
  SelectBoxWrap,
  UserNameBox,
  WelcomeText,
  WithdrawText,
  WithdrawTextBox,
} from './style';
import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';
import { useNavigate } from 'react-router-dom';

// TODO 최근 조회 장소, 로컬스토리지 이용하여 구현하기
const MyPage = () => {
  const naviagte = useNavigate();
  const { toast, handleFloatingToast } = useToast();
  const { modal, handleViewModal, handleCloseModal } = useModal();

  const handleDeleteAccount = () => {
    handleCloseModal();
    handleFloatingToast();

    setTimeout(() => {
      naviagte('/');
    }, 2200);
  };

  return (
    <MyPageWrap>
      <FirstSection>
        <WelcomeText>반갑습니다!</WelcomeText>
        <UserNameBox>
          <p>수정</p>
          <p>님</p>
        </UserNameBox>
        <InfoText>어떤 작업을 하시겠어요?</InfoText>
      </FirstSection>
      <DivideLine />
      <MyPageJobList>
        <li>로그아웃</li>
        <li>최근 조회한 장소 20곳</li>
        <WithdrawTextBox onClick={handleViewModal}>회원탈퇴</WithdrawTextBox>
      </MyPageJobList>
      {modal && (
        <Modal onClose={handleCloseModal}>
          <ModalBox>
            <WithdrawText>정말로 탈퇴하시겠어요?</WithdrawText>
            <SelectBoxWrap>
              <SelectBox>아니오</SelectBox>
              <SelectBox onClick={handleDeleteAccount}>예</SelectBox>
            </SelectBoxWrap>
          </ModalBox>
        </Modal>
      )}
      {toast && <Toast>탈퇴되었습니다. 다음에 또 만나요!</Toast>}
    </MyPageWrap>
  );
};

export default withAuth(MyPage);
