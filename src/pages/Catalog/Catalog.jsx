import { storee } from '../../data/storee';
import { useState } from 'react';
import { useEffect } from "react";
import { Card } from './Card/Card.jsx'
import './Catalog.css';

export function Catalog() {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [store, setstore] = useState(null)
    const data = store ? [...store] : []
    const сategories = store && [...new Set(store.map(pizza => pizza.category))];
    useEffect(() => {
        async function getstore() {
            const store = storee;
            setstore(store);
        }
        getstore();
    }, []);
    const сategoryChange = (e) => { 
        e.target.value==='Всё' ? resetSelect() : setSelectValue(e.target.value)
    };
    const textChange = (e) => {
        setInputValue(e.target.value);
    };
    const resetSelect = () => {
        setSelectValue('');
    };

    return (
        <>
            <h1 className="main-title">Каталог</h1>
            <div className="inner">
            <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="select-category">Выберите категорию:</label>
                            <select name="select-category" id="select-category" className="select" onChange={сategoryChange}>
                                <option value="1" selected="true" disabled="disabled">Выберите категорию</option>
                                <option value="Всё">Всё</option>
                                {
                                    store && сategories
                                            .map(pizza=>(<option>{pizza}</option>))
                                }
                                
                            </select>
                        <input type="text" value={inputValue} placeholder='Поиск' onChange={textChange} />
                    </form>
                    {
                        storee ?
                            storee
                                .filter(pizza => (pizza.name.toLowerCase().includes(inputValue.toLocaleLowerCase())))
                                .filter(pizza => (pizza.category.toLowerCase().includes(selectValue.toLocaleLowerCase())))
                                
                                .map(pizza => (
                                    <Card key={pizza.id} {...pizza} />
                                ))
                            : <p>..загрузка данных...</p>
                    }
            </div>
        </>
    );
}