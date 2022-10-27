import { Link } from 'react-router-dom';
import { Delay } from '../../Components/Delay';
import { ClickLink } from '../../Components/Command';
import './style.css';

export const Nav = () => {
    
    return (
        <div className='navbar'>
            <Delay waitBeforeShow = { 4000 }>
                <>
                    <Link to={'Home'} id='home' onClick={ClickLink}>{'>'}Home</Link>
                    <Link to={'About'}>{'>'}About me</Link>
                    <Link to={'Projects'}>{'>'}Projects</Link>
                    <Link to={'Contact'}>{'>'}Contact me</Link>
                </>
            </Delay>
        </div>
    )
}
