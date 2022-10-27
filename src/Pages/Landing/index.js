import React from 'react';
import './style.css';
import { Delay } from '../../Components/Delay';

export const Landing = () => {

    return (
        <div className='homeContent'>
            <Delay waitBeforeShow = { 4000 }>   
                <h2>WELCOME TO MY PORTFOLIO.</h2>
            </Delay>
        </div>
    )
}

