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

		this.props.firebaseRef.on('child_added', dataSnapshot => {
			let val = dataSnapshot.val()
			let key = dataSnapshot.key()
			let { messages } = this.state

			if (!messages[ key ]) {
				val.key = key
				messages[ key ] = val
				this.setState({ messages })
			}
		})
	}

	state = {
		messages: {}
	}

	render() {
		let nodes = Object.keys(this.state.messages)
			.map(key => Object.assign({}, this.state.messages[ key ]))
			.map(({ message, avatar, key }) => <Message key={ key } message={ message } avatar={ avatar } />)

		return (
			<List>{ nodes }</List>
		)
	}
}
