import { createGlobalStyle } from "styled-components";

export const window_width = window.innerWidth;
export const window_height = window.innerHeight;
export const small_screen = window_width < 650;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
      background-color: #3a3a3a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Robot', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
