import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@700;800&display=swap');

  html, body{
    font-family: ${({ theme }) => theme.font.family.body};
    background-color: ${({ theme }) => theme.color.bg};
  }

  a{
    color: ${({ theme }) => theme.color.primary};

  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.font.family.main};
    color: ${({ theme }) => theme.color.primary};
  }

  p{
    font-size: 0.875em;
    max-width: 600px;
    color: ${({ theme }) => theme.color.secondary};
  }

`

export default GlobalStyle;