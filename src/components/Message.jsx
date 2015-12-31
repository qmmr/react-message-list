import React, { Component, PropTypes } from 'react'
import { ListItem, Avatar } from 'material-ui'

export default class Message extends Component {

	static displayName = 'Message'
	static propTypes = {
		avatar: PropTypes.string,
		message: PropTypes.string
	}

	constructor(props) {
		super(props)
	}

	render() {
		const { avatar, message } = this.props

		return <ListItem disabled leftAvatar={ <Avatar src={ avatar } /> }>{ message }</ListItem>
	}
}
