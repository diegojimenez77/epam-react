import { useState, useEffect } from 'react';

function CoursesFetch() {
	const url = 'http://localhost:4000/courses/all';
	const [courses, setCourses] = useState([]);

	const getCourses = async () => {
		const response = await fetch(url);
		const courses = await response.json();
		setCourses(courses);
	};

	useEffect(() => {
		getCourses();
	}, []);

	return (
		<>
			<h1>Meet Our Authors</h1>
			{courses.map((course) => (
				<div className='course' key={course.id}>
					<div>
						<p>{course.id}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default CoursesFetch;
