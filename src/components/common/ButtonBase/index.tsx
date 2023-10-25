import { ButtonText, ButtonWrap } from './style';

interface ButtonProps {
  type: 'submit' | 'button';
  name: string;
  onClick?: () => void;
}

const ButtonBase = ({ type, name }: ButtonProps) => {
  return (
    <ButtonWrap type={type}>
      <ButtonText>{name}</ButtonText>
    </ButtonWrap>
  );
};

export default ButtonBase;
