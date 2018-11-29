import ScreenRoot from './Root';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import getLocaleStrings from './custom/language';
global.strings = getLocaleStrings('ES');

const rootElement = document.querySelector("#root");

const App = () => (
	<BrowserRouter>
		<Suspense fallback={<div>Loading...</div>}>
			<ScreenRoot />
		</Suspense>
	</BrowserRouter>
)

ReactDOM.render(<App />, rootElement);
