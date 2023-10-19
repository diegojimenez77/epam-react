import { useState, useEffect } from 'react';

function Fet() {
	const url = 'https://api.github.com/users';
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<h1>Meet Our Authors</h1>
			{users.map((user) => (
				<div className='usersImg' key={user.id}>
					<div>
						<img className='pics' src={user.avatar_url} alt={user.login} />
						<p>{user.login}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default Fet;
