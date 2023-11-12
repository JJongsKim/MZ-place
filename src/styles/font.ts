import { css } from 'styled-components';

type Font = {
  size: number;
  weight: 'R' | 'M' | 'SB' | 'B';
  family: 'Noto Sans KR';
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
  M_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'M' }),
  M_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'M' }),
  M_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'M' }),
  M_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'M' }),
  M_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'M' }),
  M_24: FONT({ size: 24, family: 'Noto Sans KR', weight: 'M' }),

  SB_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'SB' }),
  SB_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'SB' }),
  SB_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'SB' }),
  SB_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'SB' }),
  SB_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'SB' }),
  SB_22: FONT({ size: 22, family: 'Noto Sans KR', weight: 'SB' }),
  SB_23: FONT({ size: 23, family: 'Noto Sans KR', weight: 'SB' }),

  B_13: FONT({ size: 13, family: 'Noto Sans KR', weight: 'B' }),
  B_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'B' }),
  B_15: FONT({ size: 15, family: 'Noto Sans KR', weight: 'B' }),
  B_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'B' }),
  B_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'B' }),
  B_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'B' }),
  B_22: FONT({ size: 22, family: 'Noto Sans KR', weight: 'B' }),
  B_24: FONT({ size: 24, family: 'Noto Sans KR', weight: 'B' }),
  B_26: FONT({ size: 26, family: 'Noto Sans KR', weight: 'B' }),
  B_28: FONT({ size: 28, family: 'Noto Sans KR', weight: 'B' }),
};
