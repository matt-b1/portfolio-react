import React from 'react';
import './style.css';
import Typical from 'react-typical';

export const Header = () => {
    return (
        <div>
            <div className='titleBar'>
                <div>   
                    <img className='fp' src={  require('./images/fp.png')} alt='Futureproof logo'></img>
                </div>
                <p className='titleBarText'>:/c/Users/Matthew/Portfolio</p>
            </div>
            <h1 id='animatedHeading' className='heading'>
                <Typical className='animatedHeading'
                steps={['matthew blackman. ^_^', 10]}
                />
            </h1>
        </div>   
    )
}

export default Header;
