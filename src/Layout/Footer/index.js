import React, { useEffect, useState } from 'react';
import './style.css';
import Typical from 'react-typical';

export const Footer = () => {
    const [ typeCommand, setTypeCommand ] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setTypeCommand(true);
        }, 2000)
    }, [])

    return (
        <div className='footer'>
            <Typical id='command' className='command'
            steps={['']}></Typical>
            {typeCommand}
        </div>   
    )
}

export default Footer;
