import { createGlobalStyle, ThemeProvider } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    #map {
      width: 400px;
      height: 400px;
    }

    * {
      box-sizing: border-box;
    }
`;