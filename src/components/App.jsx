import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Firebase from 'firebase'

import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx'

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
		this.firebaseRef = new Firebase('https://message-list-app.firebaseio.com/messages')
	}

	getChildContext() {
		return { muiTheme: ThemeManager.getMuiTheme(BaseTheme) }
	}

	render() {
		const mainSectionStyle = {
			display: 'flex',
			flexFlow: 'row wrap',
			maxWidth: 1200,
			width: '100%',
			margin: '2rem auto'
		}

		return (
			<div>
				<AppBar title="My first material-ui component!" />
				<div className="main-section" style={ mainSectionStyle }>
					<Card style={{ flexGrow: 1 }}>
						<ChannelList />
					</Card>
					<Card style={{ flexGrow: 2, marginLeft: '2rem' }}>
						<MessageList firebaseRef={ this.firebaseRef } />
					</Card>
				</div>
				<MessageBox firebaseRef={ this.firebaseRef } />
			</div>
		)
	}
}
