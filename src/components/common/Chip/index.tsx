import { ChipWrap } from './style';

interface ChipProps {
  value: string;
  size?: 'small';
  isClicked?: boolean;
}

const Chip = ({ value, size, isClicked }: ChipProps) => {
  return (
    <ChipWrap size={size} $clicked={isClicked}>
      <p>{value}</p>
    </ChipWrap>
  );
};

export default Chip;
