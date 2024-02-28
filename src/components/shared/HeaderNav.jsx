import { Link } from 'react-router-dom';
import './styles/headerNav.css';

export const HeaderNav = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <strong className='title'>e-commerce</strong>
            </Link>

            <ul className='navbar-list'>
                <li>
                    <Link to='/login'>
                        <box-icon name='user'></box-icon>
                    </Link>
                </li>

                <li>
                    <Link to='/purchases'>
                        <box-icon name='box'></box-icon>
                    </Link>
                </li>

                <li>
                    <Link to='/cart'>
                        <box-icon name='cart'></box-icon>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
