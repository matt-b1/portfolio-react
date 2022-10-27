import { Delay } from '../../Components/Delay';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {
    return (
        <div className='navbar'>
            <Delay waitBeforeShow = { 4000 }>
                <>
                    <Link to={'Home'}>{'>'}Home</Link>
                    <Link to={'About'}>{'>'}About me</Link>
                    <Link to={'Projects'}>{'>'}Projects</Link>
                    <Link to={'Contact'}>{'>'}Contact me</Link>
                </>
            </Delay>
        </div>
    )
}
