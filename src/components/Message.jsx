import React, { Component, PropTypes } from 'react'

export default class Message extends Component {

	static displayName = 'Message'
	static propTypes = {
		message: PropTypes.string
	}

	constructor(props) {
		super(props)
	}

	render() {
		return <li>{ this.props.message }</li>
	}
}
