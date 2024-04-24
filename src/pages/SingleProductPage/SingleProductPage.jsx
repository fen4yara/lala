import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';

export function SingleProductPage() {
    const { id } = useParams();

    const pizza = store.find(pizza => pizza.id == id);

    return (
        <section>
            <img src={pizza.photo} alt="pizza"/>
            <div className="asdaa">
                <h2>{pizza.name}</h2>
                <p className='qwq'>{pizza.body}</p>
                <p className='asdq'>{pizza.price} ₽</p>
            </div>
            
        </section>
    );
}