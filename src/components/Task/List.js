import React from "react";
import ListElement from './ListElement';

const values = [
	'task 1',
	'task 2',
	'task 3'
];

const TaskList = () => (
	<ul>
		{values.map((value) => <ListElement key={value} value={value} /> )}
	</ul>
);

export default TaskList;
