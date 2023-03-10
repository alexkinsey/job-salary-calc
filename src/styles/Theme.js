import { css } from 'styled-components';

const size = {
  xs: '375px', // for small screen mobile
  sm: '575px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
};

export const theme = {
  colors: {
    primary: '#06c',
    primaryHover: '#005bb6',
    secondary: '#FFC80A',
    tertiary: '#303030',
    background: '#fff',
    textBlack: '#1d1d1f',
    textWhite: '#f5f5f7',
    // primaryTextColor: '#1d1d1f',
    // secondaryTextColor: '#777777',
    // inputPlaceholder: '#C7C7C7',
    // darkGrayText: '#303030',
    // darkText: '#1A1A1A',
    // black: '#000',
    // white: '#fff',
    // dark: '',
    // medium: '',
    // light: '',
    // danger: '',
    // success: '#66A15A',
  },
  fonts: {
    sanSerif: 'Open Sans',
  },
  sizes: {
    xs: `${size.xs}`,
    sm: `${size.sm}`,
    md: `${size.md}`,
    lg: `${size.lg}`,
    xl: `${size.xl}`,
  }
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};

export const font = {
  light: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 200;
  `,
  normal: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 400;
  `,
  medium: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 500;
  `,
  bold: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 700;
  `,
  title: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 700;
    text-transform: uppercase;
  `,
  heading: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 400;
    text-transform: uppercase;
  `,
  subheading: css`
    font-family: ${({ theme }) => theme.fonts.sanSerif};
    font-weight: 400;
    text-transform: uppercase;
  `,
};
