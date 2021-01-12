import React from 'react'

import { selectTheme } from '@/app/slices/darkMode.slice'
import { useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { ResetStyles } from '@/styles/GlobalStyles'

const WithTheme = (WrappedComponent) => (wrappedComponentProps) => (
    <ThemeProvider theme={useSelector(selectTheme)}>
        <ResetStyles />
        <WrappedComponent {...wrappedComponentProps} />
    </ThemeProvider>
)

export default WithTheme
