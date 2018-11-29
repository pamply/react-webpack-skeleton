const getLocaleStrings = (locale) => {
	if (!locale || !languages[locale]) {
		return languages[locale];
	}

	return languages[locale];
}

const languages = {
	EN : {
		goToTask: 'Go to task list'
	},
	ES: {
		goToTask: 'Ir a lista de tareas'
	}
}
export default getLocaleStrings;
