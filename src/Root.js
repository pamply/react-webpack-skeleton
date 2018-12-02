import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const ScreenMain = lazy(() => import("./screens/Main"));
const ScreenTaskList = lazy(() => import("./screens/Task/List"));
const ScreenTaskForm = lazy(() => import("./screens/Task/Form"));
const ScreenAbout = lazy(() => import("./screens/About"));
const ScrenUserRegister = lazy(() => import("./screens/User/Register"));

import ScreenLogin from "./screens/Login";

import UIHeader from "./UI/Header";
import UIFooter from "./UI/Footer";

// TODO make it work with task/list and task/form
const ScreenRoot = (props) => {
	return (
		<div>
			<UIHeader />
			<Switch>
				<Route path="/task-list" component={ScreenTaskList} />
				<Route path="/task-form" component={ScreenTaskForm} />
				<Route path="/about" component={ScreenAbout} />
				<Route path="/root" component={ScreenMain} />
				<Route path="/register" component={ScrenUserRegister} />
				<Route path="/" component={ScreenLogin} />
			</Switch>
			<UIFooter />
		</div>
	)
}

export default ScreenRoot;
