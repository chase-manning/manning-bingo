import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: #FBF4F0;
        --main: #090A0D;
        --primary: #0086DE;
        --secondary: #FD5D9B;
        --green: #19C788;
        --red: #F5543D;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: 'Lemon', serif;
    }

    div {
        color: var(--main);
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
        background: none;

        // Remove arrows from number input
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
