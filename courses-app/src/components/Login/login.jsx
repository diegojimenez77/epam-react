import './login.scss';
import { Link } from 'react-router-dom';
function Login() {
	return (
		<div className='login'>
			<div className='card'>
				<h1>Login</h1>
				<form>
					<label htmlFor='email'>Email</label>
					<input placeholder='Enter email'></input>
					<label htmlFor='password'>Password</label>
					<input placeholder='Enter password'></input>
					<button>Login</button>
				</form>
				<span>
					If you have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</span>
			</div>
		</div>
	);
}

export default Login;
