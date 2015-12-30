import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'

require('./style/main.scss')

ReactDom.render(App, document.querySelector('.main'))
