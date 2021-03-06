import React, { Component, PropTypes } from 'react'
import { Card } from 'material-ui'

export default class MessageBox extends Component {

	static displayName = 'MessageBox'
	static propTypes = {
		firebaseRef: PropTypes.object
	}

	constructor(props) {
		super(props)
	}

	state = {
		message: ''
	}

	handleOnChange = ({ target }) => {
		this.setState({ message: target.value })
	}

	handleOnKeyUp = evt => {
		let message = evt.target.value.trim()
		if (evt.keyCode === 13 && message !== '') {
			evt.preventDefault()
			this.props.firebaseRef.push({
				message: this.state.message
			})
			this.setState({ message: '' })
		}
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
			fontSize: '0.9rem',
			outline: 'auto px',
			padding: '.6rem',
			resize: 'none',
			width: '100%'
		}

		return (
			<Card style={ messageBoxContainerStyle }>
				<input type="text" value={ this.state.message } onChange={ this.handleOnChange } onKeyUp={ this.handleOnKeyUp } style={ textAreaStyle } />
			</Card>
		)
	}
}
