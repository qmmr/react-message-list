import React, { Component } from 'react'
import Firebase from 'firebase'
import _ from 'lodash'
import { List } from 'material-ui'
import Message from './Message.jsx'

export default class MessageList extends Component {

	static displayName = 'MessageList'

	constructor(props) {
		super(props)
		this.firebaseRef = new Firebase('https://message-list-app.firebaseio.com/messages')
		this.firebaseRef.once('value', dataSnapshot => {
			let messages = dataSnapshot.val()
			this.setState({ messages })
		})
	}

	state = {
		messages: []
	}

	render() {
		const nodes = this.state.messages.map(({ message, avatar }, idx) => {
			return <Message key={ idx } message={ message } avatar={ avatar } />
		})

		return (
			<List>{ nodes }</List>
		)
	}
}
