import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui'

export default class Channel extends Component {

	static displayName = 'Channel'
	static propTypes = {
		channel: PropTypes.string
	}

	constructor(props) {
		super(props)
	}

	render() {
		return <ListItem>{ this.props.channel }</ListItem>
	}
}
