import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <div className="lal">
                        <Link to="/" className="header__logo"><img src='/src/assets/logo.svg'></img></Link>
                            <nav className="footer__nav nav">
                                <NavLink to="/" className="nav__link">Главная</NavLink>
                                <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                                <NavLink to="/about" className="nav__link">О нас</NavLink>
                            </nav>
                            <img src="/src/assets/Frame.svg" alt="frame" />
                    </div>
                    <h2 className='text'>Все права защищены</h2>
                </div>
                
            </div>
        </footer>
    );
}