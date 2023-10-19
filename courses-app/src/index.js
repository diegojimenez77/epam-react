import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FirstPage from './pages/first-page';
import SecondPage from './pages/second-page';
import NestedPage from './pages/nested-page.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='first-page' element={<FirstPage />}>
					<Route path=':pageId' element={<NestedPage />} />
				</Route>
				<Route path='second-page' element={<SecondPage />} />

				<Route path='*' element={<Navigate to='/' />} />
			</Route>
			<Route path='/registration' element={<Registration />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</BrowserRouter>
);
