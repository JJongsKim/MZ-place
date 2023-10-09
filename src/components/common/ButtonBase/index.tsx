import { ButtonText, ButtonWrap } from './style';

interface ButtonProps {
  name: string;
}

const ButtonBase = ({ name }: ButtonProps) => {
  return (
    <ButtonWrap>
      <ButtonText>{name}</ButtonText>
    </ButtonWrap>
  );
};

export default ButtonBase;
