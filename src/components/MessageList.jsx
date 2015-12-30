import React, { Component } from 'react'
import Message from './Message.jsx'

export default class MessageList extends Component {

	static displayName = 'MessageList'

	constructor(props) {
		super(props)
	}

	state = {
		messages: [
			'hi there buddy!',
			'how are you?'
		]
	}

	render() {
		const nodes = this.state.messages.map((message, idx) => {
			return <Message key={ idx } message={ message } />
		})

		return (
			<ul>{ nodes }</ul>
		)
	}
}
