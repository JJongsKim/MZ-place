import { WarningIcon, WarningText, WarningWrap } from './style';
import Warning from '@assets/warning.svg';

interface WarningProps {
  text: string;
}

const WarningMention = ({ text }: WarningProps) => {
  return (
    <WarningWrap>
      <WarningIcon src={Warning} />
      <WarningText>{text}</WarningText>
    </WarningWrap>
  );
};

export default WarningMention;
