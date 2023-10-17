import React from 'react';
import Button from '../../../common/Button/Button';
import mockedCoursesList from '../mockedCoursesList';
import mockedAuthorsList from '../mockedAuthorsList';
import Duration from '../../../helpers/getCourseDuration';
import FormatCreationDate from '../../../helpers/formatCreationDate';
import './CourseCard.css';

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
		<div className='Ellipsis'>
			{data.map((item) => (
				<span key={item.id}>{renderItem(item)}, </span>
			))}
		</div>
	);
}

// function getNameById(id) {
// 	for (let i = 0; i < mockedAuthorsList.length; i++) {
// 		if (mockedAuthorsList[i].id === id) {
// 			return mockedAuthorsList[i].name;
// 		}
// 	}
// 	return null;
// }

function CourseCard() {
	return (
		<List
			data={mockedCoursesList}
			renderEmpty={<p>This list is empty</p>}
			renderItem={(item) => (
				<>
					<div className='CourseCard'>
						<div className='CourseTitleDesc'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						</div>
						<div className='CourseADC'>
							<div>
								<b>Autors: </b>
								<Authors
									data={mockedAuthorsList}
									renderEmpty={<p>This list is empty</p>}
									renderItem={(item) => item.name}
								/>
							</div>
							<p>
								<b>Duration:</b>
								<Duration duration={item.duration} />
							</p>
							<p>
								<b>Created:</b>
								<FormatCreationDate date={item.creationDate} />
							</p>
							<Button buttonText={'Show course'} />
						</div>
					</div>
				</>
			)}
		/>
	);
}

export default CourseCard;
