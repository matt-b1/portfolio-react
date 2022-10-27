import React from 'react';
import './style.css';
import { Delay } from '../../Components/Delay';

export const Home = () => {

    return (
        <div className='homeContent'>
            <Delay waitBeforeShow = { 1000 }>
                <h2>HOME</h2>
            </Delay>
        </div>
    )
}

