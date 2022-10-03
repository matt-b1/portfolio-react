import React from 'react';
import './style.css';

export const Header = () => {
    return (
        <div>
            <div className='titleBar'>
                <div>   
                    <img className='fp' src={  require('./images/fp.png')} alt='Futureproof logo'></img>
                </div>
                <p className='titleBarText'>:/c/Users/Matthew/Portfolio</p>
            </div>
        </div>   
    )
}

export default Header;
