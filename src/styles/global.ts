import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['base-border']};
  }

  ::-webkit-scrollbar {
    background: none;
    width: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['base-text']};
    border-radius: 1rem;
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`
