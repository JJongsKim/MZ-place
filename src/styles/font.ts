import { css } from 'styled-components';

type Font = {
  size: number;
  weight: 'R' | 'M' | 'SB' | 'B';
  family: 'pretendard';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'R':
      return 400;
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
  }
};

const FONT = ({ size, weight, family }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  font-family: ${family};
`;

export const font = {
  M_12: FONT({ size: 12, family: 'pretendard', weight: 'M' }),
  M_14: FONT({ size: 14, family: 'pretendard', weight: 'M' }),
  M_16: FONT({ size: 16, family: 'pretendard', weight: 'M' }),
  M_18: FONT({ size: 18, family: 'pretendard', weight: 'M' }),
  M_20: FONT({ size: 20, family: 'pretendard', weight: 'M' }),
  M_24: FONT({ size: 24, family: 'pretendard', weight: 'M' }),

  SB_12: FONT({ size: 12, family: 'pretendard', weight: 'SB' }),
  SB_16: FONT({ size: 16, family: 'pretendard', weight: 'SB' }),
  SB_18: FONT({ size: 18, family: 'pretendard', weight: 'SB' }),
  SB_20: FONT({ size: 20, family: 'pretendard', weight: 'SB' }),
  SB_22: FONT({ size: 22, family: 'pretendard', weight: 'SB' }),
  SB_28: FONT({ size: 28, family: 'pretendard', weight: 'SB' }),

  B_13: FONT({ size: 13, family: 'pretendard', weight: 'B' }),
  B_14: FONT({ size: 14, family: 'pretendard', weight: 'B' }),
  B_15: FONT({ size: 15, family: 'pretendard', weight: 'B' }),
  B_16: FONT({ size: 16, family: 'pretendard', weight: 'B' }),
  B_18: FONT({ size: 18, family: 'pretendard', weight: 'B' }),
  B_20: FONT({ size: 20, family: 'pretendard', weight: 'B' }),
  B_22: FONT({ size: 22, family: 'pretendard', weight: 'B' }),
  B_24: FONT({ size: 24, family: 'pretendard', weight: 'B' }),
  B_26: FONT({ size: 26, family: 'pretendard', weight: 'B' }),
  B_28: FONT({ size: 28, family: 'pretendard', weight: 'B' }),
};
