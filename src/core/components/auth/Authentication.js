import React, { Component } from 'react'
import SignIn from '../../../common/SignIn'

export default function Authorized(WrappedComponent) {
	return class extends Component {
		constructor(props) {
			super(props)
			this.state = {
				auth: false,
				authError: false,
			}
		}

		handleLogin = (id, userName, password) => {
			if (id === 'login' && userName === 'kirti' && password === 'shiva@3@456') {
				this.setState({
					auth: true,
					authError: false,
				})
			} else {
				this.setState({
					authError: true,
				})
			}
		}

		render() {
			if (this.state.auth) {
				return <WrappedComponent {...this.props} />
			} else {
				return <SignIn onHandleLogin={this.handleLogin} authError={this.state.authError} />
			}
		}
	}
}
