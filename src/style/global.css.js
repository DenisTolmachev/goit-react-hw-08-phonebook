import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
            //background-color: ${({ theme }) => theme.colors.primary};;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3 {
        color:${({ theme }) => theme.colors.primary}
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .react-tel-input {
       margin-top: 10px;
       margin-bottom: 20px;
    }

    .react-tel-input .form-control {
        width: 104% !important;
        height: 37px !important;
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 3px;
        border: 1px solid transparent;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
            rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    }
`;
