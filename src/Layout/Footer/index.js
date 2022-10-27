import React, { useEffect } from 'react';
import './style.css';
import { InitCommand } from '../../Components/Command';

export const Footer = () => {
    return (
        <div id='footer' className='footer'>
            {InitCommand()}
        </div>   
    )
}


