import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    font-family: ${({ theme }) =>
      theme.fonts
        .sanSerif}, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textBlack};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6, p, ul, figure, blockquote, dl, dd {
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
