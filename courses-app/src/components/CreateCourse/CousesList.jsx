import React, { useState } from 'react';
import CreateCourse from './CreateCourse';

function CoursesList() {
	const [courses, setCourses] = useState([]);

	const addCourse = (course) => {
		if (course.title.trim()) {
			course.title = course.title.trim();
			const updatedCourses = [course, ...courses];
			setCourses(updatedCourses);
		}
	};
	return (
		<>
			<CreateCourse onSubmit={addCourse} />
			<div>
				{courses.map((course) => (
					<div>{(course.id, course.title, course.description)}</div>
				))}
			</div>
		</>
	);
}

export default CoursesList();
