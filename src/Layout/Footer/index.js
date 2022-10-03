import React, { useEffect } from 'react';
import './style.css';
import Typical from 'react-typical';

export const Footer = () => {

    useEffect (() => {
        setTimeout(() => {
            document.getElementsByClassName('command')[0].textContent = '';
        }, 3200)
    }, [])

    return (
        <div className='footer'>
            <Typical className='command'
            steps={['', 1000, 'ls']}
            wrapper='p'></Typical>
        </div>   
    )
}


