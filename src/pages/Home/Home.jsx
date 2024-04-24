import './Home.css';
import { Link, NavLink } from 'react-router-dom';

export function Home() {
    return (
        <div className="container">
            <h2 className='qweqe'>Баннер</h2>
            <div className="bane">
            <Link to="/catalog" className="header__logo"><img src="/src/assets/d.png" alt="banner"  className='ban'/></Link>
            </div>
            <div className="inner">
                <h2 className="ter">Ищите нас здесь</h2>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbd7d29efacc02a862a2022a58937e0a061bf81c1e620ae75328d31eedf40da2&amp;source=constructor" width="1207" height="689" frameborder="0"></iframe>
            </div>
        </div>
    );
}