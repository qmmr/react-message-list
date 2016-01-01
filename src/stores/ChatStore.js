import alt from '../alt'
import Actions from '../actions'
// import { datasource } from 'alt/util/lib/decorators'

class ChatStore {
	constructor() {
		this.state = {
			user: null
		}
		this.bindListeners({
			login: Actions.login
		})
	}

	login(user) {
		this.setState({ user })
	}
}

export default alt.createStore(ChatStore)
