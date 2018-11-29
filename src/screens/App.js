import { Link } from "react-router-dom";
import React from "react";

// TODO make it work with task/list and task/form
const RootScreen = () => (
	<div>
		<div>
			<ul>
				<li><Link to="/task-list">{strings['goToTask']}</Link></li>
				<li><Link to="/task-form">Go to task form</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	</div>
);

export default RootScreen;
