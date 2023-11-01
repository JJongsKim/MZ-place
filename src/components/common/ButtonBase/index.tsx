import { ButtonText, ButtonWrap } from './style';

interface ButtonProps {
  type?: 'button';
  name: string;
  onClick?: () => void;
}

const ButtonBase = ({ type, name, onClick }: ButtonProps) => {
  return (
    <ButtonWrap type={type} onClick={onClick}>
      <ButtonText>{name}</ButtonText>
    </ButtonWrap>
  );
};

export default ButtonBase;
