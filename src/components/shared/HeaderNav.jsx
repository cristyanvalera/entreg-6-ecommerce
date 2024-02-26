import './styles/headerNav.css';

export const HeaderNav = () => {
    return (
        <nav className='navbar'>
            <strong className='title'>e-commerce</strong>

            <div className='btn-group'>
                <button className='icon'>
                    <box-icon name='user'></box-icon>
                </button>

                <button className='icon'>
                    <box-icon name='box'></box-icon>
                </button>
                
                <button className='icon'>
                    <box-icon name='cart'></box-icon>
                </button>
            </div>
        </nav>
    );
};
