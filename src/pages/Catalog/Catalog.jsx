import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import './Catalog.css';

export function Catalog() {
    return (
        <>
            <h1 className="main-title">Каталог</h1>
            <div className="inner">
            {
                store.map(pizza => (
                    <article key={pizza.id}>
                        <img src={pizza.photo} alt="pizza"/>
                        <h2>{pizza.name}</h2>
                        <p className='asdad'>{pizza.body}</p>
                        <div className="wra">
                        <p className='price'>{pizza.price} ₽</p>
                        <Link to={`/catalog/${pizza.id}`}>Перейти</Link>
                        </div>
                    </article>
                ))
            }
            </div>
        </>
    );
}