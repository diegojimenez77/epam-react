function FormatCreationDate(props) {
	var parts = props.date.split('/');

	if (parts.length === 3) {
		var newDate = new Date(parts[2], parts[0], parts[1]);

		var day = newDate.getDate();
		var month = newDate.getMonth();
		var year = newDate.getFullYear();

		var newDateFormat =
			' ' +
			day.toString().padStart(2, '0') +
			'.' +
			month.toString().padStart(2, '0') +
			'.' +
			year;
	}

	return newDateFormat;
}

export default FormatCreationDate;
