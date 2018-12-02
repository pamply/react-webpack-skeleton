const scheme = "http";
const host = "localhost";
const port = "3000";
const endpoint = "/graphql";
export const uri = `${scheme}://${host}:${port}${endpoint}`;

export const getUserQuery = `
	query GetUser($input: LoginInput) {
		getUser(input: $input) {
			username
			password
		}
	}
`;

const createUserQuery = `
	mutation CreateUser($input: UserInput) {
		createUser(input: $input) {
			username,
			password,
			email
		}
	}
`;

const data = ({ data }, funcName) => {
	return data[funcName];
}

const variables = {
	input: {}
}

const makeFetch = (query, variables) => {
	return fetch(uri, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			query,
			variables
		})
	}).then(response => response.json());
}

export const userExists = ({ username, password }) => {
	variables.input = { username, password };

	return makeFetch(getUserQuery, variables)
					.then(json => data(json, 'getUser'))
}

export const createUser = ({ username, password, email }) => {
	variables.input = { username, password, email };
	return makeFetch(createUserQuery, variables)
					.then(json => data(json, 'createUser'));
}
