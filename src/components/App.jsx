import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Firebase from 'firebase'
import connectToStores from 'alt-utils/lib/connectToStores'
import ChatStore from '../stores/ChatStore'

import Login from './Login.jsx'
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

class App extends Component {

	static displayName = 'App'
	static propTypes = {
		user: PropTypes.object
	}
	static childContextTypes = {
		muiTheme: PropTypes.object
	}
	static getStores() {
		return [ ChatStore ]
	}
	static getPropsFromStores() {
		return ChatStore.getState()
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

		let view = <Login />

		if (this.props.user) {
			view = (
				<div className="main-section" style={ mainSectionStyle }>
					<Card style={{ flexGrow: 1 }}>
						<ChannelList />
					</Card>
					<Card style={{ flexGrow: 2, marginLeft: '2rem' }}>
						<MessageList firebaseRef={ this.firebaseRef } />
					</Card>
					<MessageBox firebaseRef={ this.firebaseRef } />
				</div>
			)
		}

		return (
			<div>
				<AppBar title="My first material-ui component!" />
				{ view }
			</div>
		)
	}
}

export default connectToStores(App)
