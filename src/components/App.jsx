import React, { Component } from 'react'
import MessageList from './MessageList.jsx'

export default class App extends Component {

	static displayName = 'App'

	constructor(props) {
		super(props)
	}

	render() {
		return <MessageList />
	}
}
