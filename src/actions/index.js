import alt from '../alt'
import Firebase from 'firebase'

class Actions {
	login() {
		return function(dispatch) {
			const firebaseRef = new Firebase('https://message-list-app.firebaseio.com/')
			firebaseRef.authWithOAuthPopup('google', (err, user) => {
				if (err) {
					console.error(err)
					return void 0
				}

				dispatch(user)
			})
		}
	}
}

export default alt.createActions(Actions)
