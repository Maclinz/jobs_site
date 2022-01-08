import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    :root{
        --color-neutral:  #F2F6FF;
        --color-neutral-2:  #FAFAFF;
        --color-neutral-3: #F4F7F7;
        --color-primary: #27AE60;
        --color-primary-dark: #005AFF;
        --color-white: #fff;
        --color-dark: #272a33;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        color: var(--color-white);
        font-size: 1.2rem;
        font-weight: 500;
    }

    a{
        color: var(--color-white);
    }

    p{
        color: #656565;
    }
    .title-con{
        text-align: center;
    }
  
`;

export default GlobalStyle;