import { useNavigate } from 'react-router-dom';
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
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';
import ThumbnailList from '@components/common/ThumbnailList';
import { removeAccessToken, removeKakaoId, removeNaverId } from '@infra/api/token';
import { getNickname, removeNickname } from '@infra/api/nickname';
import useDeleteUser from '@hooks/api/users/useDeleteUser';
import { useDispatch } from 'react-redux';
import { setUserId } from '@store/reducers/UserIdReducer';

interface MyPageProps {
  userId: Record<string, string>;
}

const MyPage = ({ userId }: MyPageProps) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const { toast, handleFloatingToast } = useToast();
  const { modal, handleViewModal, handleCloseModal } = useModal();
  const { handleGetRecentPlaces } = RecentViewPlaces();
  const nickname = getNickname();

  const { mutate: userDeleteMutation } = useDeleteUser();
  const handleDeleteAccount = () => {
    if (userId) {
      userDeleteMutation(userId);
    }

    handleCloseModal();
    handleFloatingToast();

    setTimeout(() => {
      naviagte('/');
    }, 2200);
  };

  const storedData = handleGetRecentPlaces().reverse();

  const handleRemoveInfos = () => {
    removeAccessToken();
    removeKakaoId();
    removeNaverId();
    removeNickname();
    dispatch(setUserId({}));
  };

  const handleLogout = () => {
    handleRemoveInfos();
    naviagte('/');
  };

  return (
    <MyPageWrap>
      <FirstSection>
        <WelcomeText>반갑습니다!</WelcomeText>
        <UserNameBox>
          <p>{nickname}</p>
          <p>님</p>
        </UserNameBox>
        <InfoText>어떤 작업을 하시겠어요?</InfoText>
      </FirstSection>
      <DivideLine />
      <MyPageJobList>
        <li onClick={handleLogout}>로그아웃</li>
        <li>최근 조회한 장소 20곳</li>
        <WithdrawTextBox onClick={handleViewModal}>회원탈퇴</WithdrawTextBox>
      </MyPageJobList>
      <ThumbnailList places={storedData} recentView={true} />
      {modal && (
        <Modal onClose={handleCloseModal}>
          <ModalBox>
            <WithdrawText>정말로 탈퇴하시겠어요?</WithdrawText>
            <SelectBoxWrap>
              <SelectBox onClick={handleCloseModal}>아니오</SelectBox>
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
