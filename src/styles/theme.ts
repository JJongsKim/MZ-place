import { font } from './font';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    text: '#202020',
    gray: '#606060',
    text_gray: '#bababa',
    green: '#19bb35',
    light_green: '#02c98d',
    olive_green: '#9bca3e',
    blue: '#001aff',
  },
  font,
} as const;

export type Theme = typeof theme;
