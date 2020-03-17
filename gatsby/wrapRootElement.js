import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme/default'

export function wrapRootElement ({ element }) {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
