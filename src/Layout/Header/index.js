import React from 'react';
import './style.css';
import Typical from 'react-typical';

export const Header = () => {
    return (
        <div>
            <div className='titleBar'>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='Futureproof logo'></img>
                <p className='titleBarText'>:/c/Users/Matthew/Portfolio</p>
            </div>
            <h1 className='title'>
                <Typical 
                steps={['matthew blackman. ^_^', 1000]}
                />
            </h1>
        </div>   
    )
}

export default Header;
