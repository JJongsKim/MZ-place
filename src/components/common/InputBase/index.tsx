import { InputWrap } from './style';

interface InputProps {
  placeholder: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = ({ placeholder, name, value, onChange }: InputProps) => {
  return <InputWrap placeholder={placeholder} name={name} value={value} onChange={onChange} />;
};

export default InputBase;
