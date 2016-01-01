import React, { Component } from 'react'
import { Card, CardText, RaisedButton } from 'material-ui'
import Actions from '../actions'

class Login extends Component {

	static displayName = 'Login'

	constructor(props) {
		super(props)
	}

	handleLogin = () => Actions.login()

	render() {
		return (
			<Card>
				<CardText style={{ textAlign: 'center' }}>Login with Google before you can chat...</CardText>
				<RaisedButton
					style={{ display: 'block' }}
					onClick={ this.handleLogin }
					label="Login with google" />
			</Card>
		)
	}
}

export default Login
