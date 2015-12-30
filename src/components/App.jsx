import React, { Component } from 'react'

export default class App extends Component {

	static displayName = 'App'

	constructor() {
		super()
	}

	state = {
		messages: [
			'hi there',
			'how are you?'
		]
	}

	render() {
		const nodes = this.state.messages.map((message, idx) => {
			return <li key={ idx }>{ message }</li>
		})

		return (
			<ul>{ nodes }</ul>
		)
	}
}
