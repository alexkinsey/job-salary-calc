import { css } from 'styled-components';

// This file sets up the theme for the app
// The theme is used to set the colors, fonts, and sizes for the app
// The theme is then used in the styled components to set the styles for the app
export const theme = {
  colors: {
    primary: '#eb2b38',
    primaryHover: '#bf0212',
    secondary: '#3b4751',
    background: '#feffff',
    textBlack: '#023350',
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
  shadows: {
    small: '0 1px 3px 1px rgba(50, 50, 90, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.06)',
    smallHover: '0px 13px 27px -5px rgba(50, 50, 90, 0.25), 0px 5px 16px -8px rgba(0, 0, 0, 0.3);',
  },
  sizes: {
    xs: '375px', // for small screen mobile
    sm: '575px', // for mobile screen
    ms: '768px', // for small tablets
    ml: '900px', // for large tablets
    lg: '1024px', // for laptops
    xl: '1440px', // for desktop / monitors
  },
};
