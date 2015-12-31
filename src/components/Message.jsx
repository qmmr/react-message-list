import React, { Component, PropTypes } from 'react'
import { ListItem, Avatar } from 'material-ui'

export default class Message extends Component {

	static displayName = 'Message'
	static propTypes = {
		message: PropTypes.string
	}

	constructor(props) {
		super(props)
	}

	render() {
		return <ListItem disabled leftAvatar={ <Avatar>...</Avatar> }>{ this.props.message }</ListItem>
	}
}
