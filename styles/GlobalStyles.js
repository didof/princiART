import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        font-family: Open-Sans;
        box-sizing: border-box;
    }
`