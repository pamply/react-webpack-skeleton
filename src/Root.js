import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ScreenTaskList from "./screens/Task/List";
import ScreenTaskForm from "./screens/Task/Form";
import RootScreen from "./screens/App";

import UIHeader from "./UI/Header";
import UIFooter from "./UI/Footer";

const ScreenRoot = () => {
	return (
		<div>
			<UIHeader />
			<Switch>
				<Route path="/task/list" component={ScreenTaskList} />
				<Route path="/task/form" component={ScreenTaskForm} />
				<Route path="/" component={RootScreen} />
			</Switch>
			<UIFooter />
		</div>
	)
}

export default ScreenRoot;
