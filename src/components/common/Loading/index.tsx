import { styled } from 'styled-components';

import { WarningWrap } from '../warning/style';
import Spinner from '../../../images/spinner.gif';

const Loading = () => {
  return (
    <LoadingWrap>
      <SpinnerWrap src={Spinner} alt="로딩중" />
    </LoadingWrap>
  );
};

const LoadingWrap = styled(WarningWrap)``;

const SpinnerWrap = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

export default Loading;
