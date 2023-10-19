import './registration.scss';
import { Link } from 'react-router-dom';

function Registration() {
	return (
		<div className='register'>
			<div className='card'>
				<h1>Registration</h1>
				<form>
					<label htmlFor='name'>Name</label>
					<input placeholder='Enter name'></input>
					<label htmlFor='email'>Email</label>
					<input placeholder='Enter email'></input>
					<label htmlFor='password'>Password</label>
					<input placeholder='Enter password'></input>
					<button>Registration</button>
				</form>
				<span>
					If you have an accout you can <Link to='/login'>Login</Link>
				</span>
			</div>
		</div>
	);
}

export default Registration;
