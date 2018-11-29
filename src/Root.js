import React, { lazy, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RootScreen from "./screens/App";
const ScreenTaskList = lazy(() => import("./screens/Task/List"));
const ScreenTaskForm = lazy(() => import("./screens/Task/Form"));
const AboutScreen = lazy(() => import("./screens/About"));

import UIHeader from "./UI/Header";
import UIFooter from "./UI/Footer";

// TODO make it work with task/list and task/form
const ScreenRoot = () => {
	return (
		<div>
			<UIHeader />
			<Switch>
				<Route path="/task-list" component={ScreenTaskList} />
				<Route path="/task-form" component={ScreenTaskForm} />
				<Route path="/about" component={AboutScreen} />
				<Route path="/" component={RootScreen} />
			</Switch>
			<UIFooter />
		</div>
	)
}

export default ScreenRoot;
