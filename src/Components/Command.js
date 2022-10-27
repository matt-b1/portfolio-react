import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';

export const InitCommand = () => {
    
    const [navCommand, setNavCommand] = useState('');

    useEffect (() => {
        setTimeout(() => {
            document.getElementsByClassName('command')[0].textContent = '';
        }, 3200)
    }, [])
    
    return (
        <Typical className ='command'
        steps={['', 1000, 'ls']}
        wrapper='p'>
        </Typical>
    )
}

export const ClickLink = (e) => {
    switch (e.target.id) {
        case 'home':
    }
}
