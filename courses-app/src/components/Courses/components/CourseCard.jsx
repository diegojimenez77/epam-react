import React from 'react';
import Button from '../../Header/components/Button/Button';
import mockedCoursesList from '../mockedCoursesList';
import mockedAuthorsList from '../mockedAuthorsList';

function List({ data, renderItem, renderEmpty }) {
	return !data.length ? (
		renderEmpty
	) : (
		<div>
			{data.map((item) => (
				<div key={item.id}>{renderItem(item)}</div>
			))}
		</div>
	);
}

function Authors({ data, renderItem, renderEmpty }) {
	return !data.length ? (
		renderEmpty
	) : (
		<div>
			{data.map((item) => (
				<div key={item.id}>{renderItem(item)}</div>
			))}
		</div>
	);
}

function CourseCard() {
	return (
		<List
			data={mockedCoursesList}
			renderEmpty={<p>This list is empty</p>}
			renderItem={(item) => (
				<>
					<div className='CourseCard'>
						<div>
							<h1>Title: {item.title}</h1>
							<p>Description: {item.description}</p>
						</div>
						<div>
							<h4>
								Autors:{' '}
								<Authors
									data={mockedAuthorsList}
									renderEmpty={<p>This list is empty</p>}
									renderItem={(item) => <>{item.name}</>}
								/>
							</h4>
							<h4>Duration: {item.duration}</h4>
							<h4>Created: {item.creationDate}</h4>
							<Button buttonText={'Show course'} />
						</div>
					</div>
				</>
			)}
		/>
	);
}

export default CourseCard;
