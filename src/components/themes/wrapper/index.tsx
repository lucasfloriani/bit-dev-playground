import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme as ThemeType } from './types'

type ThemeProps = {
  children: any
  theme: ThemeType
}

const Theme = ({ children, theme }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)


export default Theme
