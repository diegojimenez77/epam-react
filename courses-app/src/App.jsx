import './App.scss';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { useState } from 'react';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Link, Outlet } from 'react-router-dom';
import Fet from './components/Z-Data-Fetching/Fet';
import CoursesFetch from './components/Z-Data-Fetching/CoursesFetch';

function App() {
	const [status, setStatus] = useState('Create Course');
	if (status === 'Create Course') {
		return (
			<>
				<Header />
				<Courses />
				<button
					className='pageChange'
					onClick={() => {
						if (status === 'Create Course') {
							setStatus('Display Courses');
						} else setStatus('Create Course');
					}}
				>
					{status}
				</button>
				<div>
					<Link to='/first-page'>First Page</Link>
				</div>
				<div>
					<Link to='/second-page'>Second Page</Link>
				</div>
				<Outlet />
				<Fet />
				{/* <CoursesFetch /> */}
			</>
		);
	} else {
		return (
			<>
				<Header />
				<CreateCourse />
				<button
					className='pageChange'
					onClick={() => {
						if (status === 'Create Course') {
							setStatus('Display Courses');
						} else setStatus('Create Course');
					}}
				>
					{status}
				</button>
				<div>
					<Link to='/first-page'>First Page</Link>
				</div>
				<div>
					<Link to='/second-page'>Second Page</Link>
				</div>
				<Outlet />
				<Fet />
				{/* <CoursesFetch /> */}
			</>
		);
	}
}

export default App;
