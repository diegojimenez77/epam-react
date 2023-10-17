function Duration(props) {
	var min = props.duration;
	var hrs = Math.floor(min / 60);
	var minrest = min % 60;

	var formatedTime =
		' ' +
		hrs.toString().padStart(2, '0') +
		':' +
		minrest.toString().padStart(2, '0') +
		' hours';

	return formatedTime;
}

export default Duration;
