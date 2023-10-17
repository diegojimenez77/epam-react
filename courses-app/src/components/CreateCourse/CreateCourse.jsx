import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';

function CreateCourse(props) {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// const newCourse = {
		// 	id: uuidv4(),
		// 	title: title,
		// 	description: description,
		// };
		// props.onSubmit(newCourse);
		alert(
			`The course with the title of: ${title}\n Will be created with the following description: ${description}\n`
		);
	};
	return (
		<>
			<form className='CreateCourse' onSubmit={handleSubmit}>
				<div>
					<p>Title: </p>
					<input
						type='text'
						placeholder='Enter title...'
						name='title'
						onChange={handleChangeTitle}
					/>
					<button>Create Course</button>
					<p>Description</p>
					<textarea
						placeholder='Enter Description'
						name='description'
						onChange={handleChangeDescription}
					></textarea>
				</div>
			</form>
			<CreateAuthor />
		</>
	);
}

export default CreateCourse;
