import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --first_color: white;
        --second_color: rgb(168, 58, 135);
        --third_color: rgb(60, 31, 107);
        --forth_color: #0ff;
        --images_small_wid: 200px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* font-size: 16px; (Desktop) */
    html {
        height: 100%;
        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    /* REM  = 1rem = font-size */
    body {
        position: relative;
        margin: 0;
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        padding-bottom: 18rem;
    }
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }

    svg{
        width: 50px;
        height: 50px;
    }
`