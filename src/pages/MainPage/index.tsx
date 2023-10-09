import ButtonBase from '@components/common/ButtonBase';
import Header from '@components/common/Header';
import InputBase from '@components/common/InputBase';
import Navigation from '@components/common/Navigation';

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ButtonBase name="버튼테스트" />
        <InputBase placeholder="인풋창테스트" />
      </div>
      <Navigation />
    </>
  );
};

export default MainPage;
