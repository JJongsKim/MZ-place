import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import ThumbnailList from '@components/common/ThumbnailList';
import Toast from '@components/common/Toast';
import Modal from '@components/common/Modal';
import withAuth from '@components/HOC/withAuth';

import useModal from '@hooks/useModal';
import useToast from '@hooks/useToast';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';
import useDeleteUser from '@hooks/api/users/useDeleteUser';
import { removeAccessToken, removeKakaoId, removeNaverId } from '@infra/api/token';
import { getNickname, removeNickname } from '@infra/api/nickname';
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
    <S.MyPageWrap>
      <S.FirstSection>
        <S.WelcomeText>반갑습니다!</S.WelcomeText>
        <S.UserNameBox>
          <p>{nickname}</p>
          <p>님</p>
        </S.UserNameBox>
        <S.InfoText>어떤 작업을 하시겠어요?</S.InfoText>
      </S.FirstSection>
      <S.DivideLine />
      <S.MyPageJobList>
        <li onClick={handleLogout}>로그아웃</li>
        <li>최근 조회한 장소 20곳</li>
        <S.WithdrawTextBox onClick={handleViewModal}>회원탈퇴</S.WithdrawTextBox>
      </S.MyPageJobList>
      <ThumbnailList places={storedData} recentView={true} />
      {modal && (
        <Modal onClose={handleCloseModal}>
          <S.ModalBox>
            <S.WithdrawText>정말로 탈퇴하시겠어요?</S.WithdrawText>
            <S.SelectBoxWrap>
              <S.SelectBox onClick={handleCloseModal}>아니오</S.SelectBox>
              <S.SelectBox onClick={handleDeleteAccount}>예</S.SelectBox>
            </S.SelectBoxWrap>
          </S.ModalBox>
        </Modal>
      )}
      {toast && <Toast>탈퇴되었습니다. 다음에 또 만나요!</Toast>}
    </S.MyPageWrap>
  );
};

export default withAuth(MyPage);
