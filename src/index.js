import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import * as ReactDOMServer from 'react-dom/client';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

/* ReactDOM.createRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
) */
