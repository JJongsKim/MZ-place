import WarningMention from '@components/common/warning';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
      <WarningMention text="잘못된 페이지입니다! 이곳을 눌러주세요 :D" />
    </div>
  );
};

export default NotFoundPage;
