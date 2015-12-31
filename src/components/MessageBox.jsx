import React, { Component } from 'react'
import { Card } from 'material-ui'

export default class MessageBox extends Component {

	static displayName = 'MessageBox'

	constructor(props) {
		super(props)
	}

	render() {
		const messageBoxContainerStyle = {
			margin: '2rem auto',
			maxWidth: 1200,
			padding: '1rem',
			width: '100%'
		}
		const textAreaStyle = {
			border: '1px solid #d0d0d0',
			borderRadius: '3px',
			minHeight: 50,
			outline: 'auto px',
			padding: '.5rem',
			resize: 'none',
			width: '100%'
		}

		return (
			<Card style={ messageBoxContainerStyle }>
				<textarea style={ textAreaStyle } />
			</Card>
		)
	}
}
