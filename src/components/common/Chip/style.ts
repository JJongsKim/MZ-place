import { theme } from '@styles/theme';
import { styled } from 'styled-components';

const ChipWrap = styled.div<{
  clicked?: boolean;
  size?: 'small';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'small' ? `65px` : `80px`)};
  height: ${props => (props.size === 'small' ? `30px` : `32px`)};
  border-radius: 10px;
  background-color: ${props => (props.clicked ? `${theme.colors.olive_green}` : `#eeeeee`)};
  cursor: pointer;

  p {
    color: ${props => props.clicked && `white`};
    ${theme.font.M_12};
  }

  @media screen and (min-width: 1200px) {
    width: ${props => (props.size === 'small' ? `90px` : `110px`)};
    height: ${props => (props.size === 'small' ? `40px` : `45px`)};

    p {
      ${theme.font.M_16};
    }
  }
`;

export { ChipWrap };
