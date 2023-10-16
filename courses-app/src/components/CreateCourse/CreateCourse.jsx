import React, { useRef } from 'react';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';

function CreateCourse() {
	const textTitle = useRef();
	const textDescription = useRef();

	const submit = (e) => {
		e.preventDefault();
		const title = textTitle.current.value;
		const description = textDescription.current.value;
		alert(`${title}\n${description}\n`);
		textTitle.current.value = '';
		textDescription.current.value = '';
	};
	return (
		<>
			<form className='CreateCourse' onSubmit={submit}>
				<div>
					<p>Title:</p>
					<input ref={textTitle} type='text' placeholder='Enter title...' />

					<button>Create Course</button>
					<p>Description</p>
					<textarea
						ref={textDescription}
						placeholder='Enter Description'
					></textarea>
				</div>
			</form>
			<CreateAuthor />
		</>
	);
}

export default CreateCourse;
