import ScreenRoot from './Root';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import getLocaleStrings from './custom/language';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { uri } from './graphql';

global.strings = getLocaleStrings('ES');

const rootElement = document.querySelector("#root");
const httpLink = createHttpLink({ uri });

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

const App = () => (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<ApolloProvider client={client}>
					<ScreenRoot />
				</ApolloProvider>
			</Suspense>
		</BrowserRouter>
	
)

ReactDOM.render(<App />, rootElement);
