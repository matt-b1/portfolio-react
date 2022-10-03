import React from 'react';
import Typical from 'react-typical';
import './style.css';

export const Home = () => {
    return (
        <body>
            <h1 className='title'>
                <Typical className='animatedHeading'
                steps={['matthew blackman. ^_^', 10]}
                />
            </h1>
        </body>
    )
}

export default Home;
