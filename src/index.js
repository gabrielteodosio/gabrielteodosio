import 'regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './App.js'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()
