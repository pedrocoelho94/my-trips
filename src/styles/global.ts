import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: ${theme.colors.background};
    color: ${theme.colors.white};

  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  a, p{
    font-size: 2rem;
    line-height: ${theme.sizes.medium};
  }

  a{
    color: ${theme.colors.highlight}
  }
`

export default GlobalStyles
