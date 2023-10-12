import ButtonBase from '@components/common/ButtonBase';
import Chip from '@components/common/Chip';
import InputBase from '@components/common/InputBase';
import ThumbnailBox from '@components/common/ThumbnailBox';
import Dropdown from '@components/dropdown';
import WarningMention from '@components/warning';

const MainPage = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ButtonBase name="버튼테스트" />
        <InputBase placeholder="인풋창테스트" />
        <Chip value="큰필터" />
        <Chip value="활성화" isClicked={true} />
        <Chip value="작은필터" size="small" />
        <Chip value="활성화" size="small" isClicked={true} />
        <ThumbnailBox label="썸네일 테스트" />
        <Dropdown />
        <WarningMention text="경고 문구 들어갈 자리" />
      </div>
    </>
  );
};

export default MainPage;
