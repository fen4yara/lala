import './Card.css'
import { Link } from 'react-router-dom'
import { storee } from '../../../data/storee';
export function Card(props){
    return (
        <>{
                <article key={props.id}>
                    <img src={props.photo} alt="props"/>
                    <h2>{props.name}</h2>
                    <p className='asdad'>{props.body}</p>
                    <div className="wra">
                    <p className='price'>{props.price} ₽</p>
                    <Link to={`/catalog/${props.id}`}>Перейти</Link>
                    </div>
                </article>
        }</>
    )
}