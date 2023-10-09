import { InputWrap } from './style';

interface InputProps {
  placeholder: string;
  value?: string;
}

const InputBase = ({ placeholder }: InputProps) => {
  return <InputWrap placeholder={placeholder} />;
};

export default InputBase;
