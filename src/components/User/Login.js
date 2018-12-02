import React from "react";
import { Link } from "react-router-dom";

class UserLogin extends React.Component {

	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.state = {
			logged: false,
			username: "",
			password: ""
		}
	}

	onChangeUsername({ target: { value: username }}) {
		this.setState({
			username
		})
	}

	onChangePassword({ target: { value: password }}) {
		this.setState({
			password
		})
	}

	login() {
		const { username, password } = this.state;
		const { 
			history,
			client,
			query
		} = this.props;

		client.query({
			query,
			variables: {
				input: {
					username,
					password
				}
			}
		}).then(
			({ data }) => {
				if (data && data.getUser) {
					history.push("/root");
				}
			}
		)
	}

	render() {
		const { 
			username,
			password
		} = this.state;

		return (
			<div>
				<div>
					<label>Username: </label>
					<input
						value={username}
						onChange={this.onChangeUsername} 
						type="text" 
					/>
				</div>
				<div>
					<label>Password: </label>
					<input 
						value={password}
						onChange={this.onChangePassword}
						type="password" 
					/>
				</div>
				<div><button onClick={this.login}>Login</button></div>
				<Link to="/register">Registrar usuario</Link>
			</div>
		)
	}
}

export default UserLogin;
