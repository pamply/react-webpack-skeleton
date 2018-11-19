import { Link } from "react-router-dom";
import React from "react";

const RootScreen = () => (
	<div>
		<div>
			<ul>
				<li><Link to="/task/list">Go to task list</Link></li>
				<li><Link to="/task/form">Go to task form</Link></li>
			</ul>
		</div>
	</div>
);

export default RootScreen;
