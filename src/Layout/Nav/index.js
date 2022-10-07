import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {

    const [ renderNav, setRenderNav ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRenderNav(true);
        }, 3450)
    }, [])

    return (
        <div className='navbar'>
            { renderNav &&
            <>
                <Link to={'Home'}>{'>'}Home</Link>
                <Link to={'About'}>{'>'}About me</Link>
                <Link to={'Projects'}>{'>'}Projects</Link>
                <Link to={'Contact'}>{'>'}Contact me</Link>
            </>
            }
        </div>
    )
}
