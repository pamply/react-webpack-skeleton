import React from "react";
import { getUserQuery } from "../graphql";
import { ApolloConsumer } from "react-apollo";
import UserLogin from "../components/User/Login";
import gql from "graphql-tag";

const ScreenLogin = (props) => (
	<ApolloConsumer>
		{client => <div>
									<UserLogin
										{...props}
										query={gql(getUserQuery)}
										client={client} />
								</div>
		}
	</ApolloConsumer>
)

export default ScreenLogin;
