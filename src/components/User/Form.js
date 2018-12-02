import React from "react";
import { createUser } from "../../graphql";

class UserForm  extends React.Component {
	constructor(props) {
		super(props);
		this.usernameChange = this.usernameChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.save = this.save.bind(this);
		this.state = {
			username: "",
			password: "",
			email: ""
		}
	}

	usernameChange({ target: { value: username } }) {
		this.setState({
			username
		});
	}

	passwordChange({ target: { value: password } }) {
		this.setState({
			password
		});
	}

	emailChange({ target: { value: email } }) {
		this.setState({
			email
		});
	}

	save() {
		const {
			username,
			password,
			email
		} =  this.state;
		const { history } = this.props;

		createUser({ username, password, email })
			.then((user) => {
				if(user) {
					history.push("/root");
				}
			})

	}

	render() {
		const {
			username,
			password,
			email
		} = this.state;

		return (
			<div>
				<div>
					<label>Username: </label>
					<input onChange={this.usernameChange} value={username} type="text" />
				</div>
				<div>
					<label>Password: </label>
					<input onChange={this.passwordChange} value={password} type="password" />
				</div>
				<div>
					<label>Email: </label>
					<input onChange={this.emailChange} value={email} type="text" />
				</div>
				<div><button onClick={this.save}>Save</button></div>
			</div>
		);
	}
}

export default UserForm;
