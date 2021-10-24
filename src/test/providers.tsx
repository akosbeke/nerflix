import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../config/theme'

interface WrapperProps {
  children?: React.ReactNode
}

export const render = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
  const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper }),
  }
}
