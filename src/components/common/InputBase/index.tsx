import { InputWrap } from './style';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = ({ placeholder, name, type, value, onChange }: InputProps) => {
  return (
    <InputWrap
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBase;
