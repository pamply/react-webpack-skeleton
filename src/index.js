import ScreenRoot from './Root';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector("#root");
const App = () => (
	<BrowserRouter>
		<ScreenRoot />
	</BrowserRouter>
)

ReactDOM.render(<App />, rootElement);
