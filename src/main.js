import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'

require('./style/main.scss')

ReactDom.render(React.createElement(App, {}), document.querySelector('#app'))
