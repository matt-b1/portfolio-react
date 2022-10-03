import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

if (document.querySelector('.footer')) {
    console.log('test');
}

export const Nav = () => {
    return (
        <div className='navbar'>
            <Link to={'/'}>{'>'}Home</Link>
            <Link to={'About'}>{'>'}About me</Link>
            <Link to={'Projects'}>{'>'}Projects</Link>
            <Link to={'Contact'}>{'>'}Contact me</Link>
        </div>
    )
}
