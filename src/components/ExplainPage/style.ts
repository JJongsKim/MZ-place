import { styled } from 'styled-components';

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 0 25px;
  margin-bottom: 80px;

  li {
    margin-bottom: 40px;
    line-height: 25px;
  }
`;

const InfoTextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InfoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0 26px 0 15px;
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 24px;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.font.M_13}

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.M_14}
  }
`;

const CopyButtonWrap = styled.div`
  display: flex;
  padding: 10px 0 0 35px;
`;

const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #eee;
  ${({ theme }) => theme.font.M_12};
  cursor: pointer;
`;

const MapWrap = styled.div`
  width: 280px;
  height: 180px;
  margin: 10px 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 320px;
    height: 220px;
    margin: 15px 4px 0;
  }
`;

export {
  InfoList,
  InfoTextWrap,
  InfoIconWrap,
  InfoText,
  InfoIcon,
  CopyButtonWrap,
  CopyButton,
  MapWrap,
};
