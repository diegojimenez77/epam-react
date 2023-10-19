import { Link, Outlet, useLocation } from 'react-router-dom';

export default function FirstPage() {
	const Location = useLocation();

	return (
		<>
			<div>
				<h2>First page component</h2>
				<Link to='/first-page/id1'>Link with parameter 1</Link>
			</div>
			<div>
				<Link to='/first-page/id2'>Link with parameter 2</Link>
			</div>
			<Outlet />
			<div>
				<Link to='/'>Go back to entry point</Link>
			</div>
			<div>
				<h1>Current Location: {Location.pathname}</h1>
				<p>Consult: {Location.search}</p>
			</div>
		</>
	);
}
