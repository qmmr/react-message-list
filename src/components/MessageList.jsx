import React, { Component, PropTypes } from 'react'
import { List } from 'material-ui'
import Message from './Message.jsx'

export default class MessageList extends Component {

	static displayName = 'MessageList'
	static propTypes = {
		firebaseRef: PropTypes.object
	}

	constructor(props) {
		super(props)

		this.props.firebaseRef.once('value', dataSnapshot => {
			let messagesVal = dataSnapshot.val()
			let messages = Object.keys(messagesVal)
				.map(key => Object.assign({}, messagesVal[ key ], { key }))
			this.setState({ messages })
		})
	}

	state = {
		messages: []
	}

	render() {
		const nodes = this.state.messages.map(({ message, avatar, key }) => {
			return <Message key={ key } message={ message } avatar={ avatar } />
		})

		return (
			<List>{ nodes }</List>
		)
	}
}
