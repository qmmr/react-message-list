import React, { Component } from 'react'
import Channel from './Channel.jsx'
import { List } from 'material-ui'

export default class ChannelList extends Component {

	static displayName = 'ChannelList'

	constructor(props) {
		super(props)
	}

	state = {
		channels: [
			'React',
			'Flux',
			'Node',
			'Mongodb'
		]
	}

	render() {
		const nodes = this.state.channels.map((channel, idx) => {
			return <Channel key={ idx } channel={ channel } />
		})

		return (
			<List>{ nodes }</List>
		)
	}
}
