import React, { useRef } from 'react';

function CreateAuthor() {
	const textAuthor = useRef();
	const textDuration = useRef();

	const submit = (e) => {
		e.preventDefault();
		const author = textAuthor.current.value;
		const duration = textDuration.current.value;
		alert(`${author}\n${duration}`);
		textAuthor.current.value = '';
	};
	return (
		<>
			<form className='CreateAuthor' onSubmit={submit}>
				<div>
					<h2>Add Author</h2>
					<input
						ref={textAuthor}
						type='text'
						placeholder='Enter author name...'
					/>
					<button>Create athor</button>
					<div>
						<h2>Duration</h2>
						<input
							ref={textDuration}
							type='number'
							placeholder='Enter duration in minutes...'
						/>
						<p>Duration: 00:00 hours</p>
					</div>
				</div>
				<div className='AuthorsList'>
					<h2>Authors</h2>
					<label for='1'>Vasily Dobkin</label>
					<button id='1' value='1'>
						Add author
					</button>
					<label form='2'>Nocolas Kim</label>
					<button id='2' value='2'>
						Add author
					</button>
					<label for='3'>Anna Sidorenko</label>
					<button id='3' value='3'>
						Add author
					</button>
					<label for='4'>Valentina Larina</label>
					<button id='4' value='4'>
						Add author
					</button>
				</div>
			</form>
		</>
	);
}

export default CreateAuthor;
