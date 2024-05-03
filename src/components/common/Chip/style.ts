import { theme } from '@styles/theme';
import { styled } from 'styled-components';

const ChipWrap = styled.div<{
  $clicked?: boolean;
  size?: 'small' | 'xsmall';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'small' ? `65px` : props.size === 'xsmall' ? '48px' : '80px')};
  height: ${props => (props.size === 'small' ? `30px` : props.size === 'xsmall' ? '30px' : '32px')};
  border-radius: 10px;
  background-color: ${props => (props.$clicked ? `${theme.colors.olive_green}` : `#eeeeee`)};
  cursor: pointer;

  p {
    color: ${props => props.$clicked && `white`};
    ${theme.font.M_12};
  }
`;

export { ChipWrap };
