import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';

import App from './components/App.jsx'
import theme from './theme'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'))
