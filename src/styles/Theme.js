import { css } from 'styled-components';

// This file sets up the theme for the app
// The theme is used to set the colors, fonts, and sizes for the app
// The theme is then used in the styled components to set the styles for the app

const size = {
  xs: '375px', // for small screen mobile
  sm: '575px', // for mobile screen
  md: '900px', // for tablets
  lg: '1024px', // for laptops
  xl: '1440px', // for desktop / monitors
};

export const theme = {
  colors: {
    primary: '#f85000',
    primaryHover: '#d92600',
    secondary: '#20496b',
    background: '#f9faf7',
    textBlack: '#2e3742',
    textGrey: '#5b6876',
    textWhite: '#f9f9f9',
    white: '#ffffff',
    black: '#000000',
    grey: '#e0e0e0',
  },
  fonts: {
    sanSerif: 'Open Sans',
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
      font-weight: 600;
      text-transform: uppercase;
    `,
    subheading: css`
      font-family: ${({ theme }) => theme.fonts.sanSerif};
      font-weight: 400;
      text-transform: uppercase;
    `,
  },
  sizes: {
    xs: `${size.xs}`,
    sm: `${size.sm}`,
    md: `${size.md}`,
    lg: `${size.lg}`,
    xl: `${size.xl}`,
  },
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};
