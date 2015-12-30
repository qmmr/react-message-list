import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MessageList from './MessageList.jsx'

import { AppBar } from 'material-ui'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import BaseTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

export default class App extends Component {

	static displayName = 'App'

	constructor(props) {
		super(props)
	}

	static childContextTypes = {
		muiTheme: PropTypes.object
	}

	getChildContext() {
		return { muiTheme: ThemeManager.getMuiTheme(BaseTheme) }
	}

	render() {
		return (
			<div>
				<AppBar title="My first material-ui component!" />
				<MessageList />
			</div>
		)
	}
}
