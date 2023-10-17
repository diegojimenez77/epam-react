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
					<div>
						<label htmlFor='1'>Vasily Dobkin </label>
						<input type='button' id='1' value='Add author' />
					</div>
					<div>
						<label htmlFor='2'>Nocolas Kim </label>
						<input type='button' id='2' value='Add author' />
					</div>
					<div>
						<label htmlFor='3'>Anna Sidorenko </label>
						<input type='button' id='3' value='Add author' />
					</div>
					<div>
						<label htmlFor='4'>Valentina Larina </label>
						<input type='button' id='4' value='Add author' />
					</div>
				</div>
			</form>
		</>
	);
}

export default CreateAuthor;
