import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MessageList from './MessageList.jsx'

import { AppBar, Card } from 'material-ui'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import BaseTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

export default class App extends Component {

	static displayName = 'App'
	static childContextTypes = {
		muiTheme: PropTypes.object
	}

	constructor(props) {
		super(props)
	}

	getChildContext() {
		return { muiTheme: ThemeManager.getMuiTheme(BaseTheme) }
	}

	render() {
		return (
			<div>
				<AppBar title="My first material-ui component!" />
				<Card>
					<MessageList />
				</Card>
			</div>
		)
	}
}
