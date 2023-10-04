import React from 'react'
import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'

const Header = () => (
    <div className='header'>
        <Logo />
        <h3>Dave</h3>
        <Button buttonText={'Logout'}/>
    </div>
);

export default Header