import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import { theme } from 'core/constants/theme'

const AppComponent = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
)

render(<AppComponent />, document.getElementById('root'))
