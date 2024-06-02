import "./Login.css"
import { useContext, useState } from 'react'
import { AuthContext } from "../../hoc/AuthContext"

import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
    const [data, setData] = useState({
        login: '',
        password: '',
    });

    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    function handleLogin(event) {
        event.preventDefault();
        setUser(data);
        navigate('/');
    }

    return (
        <>
            <div className="aaa">
                <h1>Авторизация</h1>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} onSubmit={handleLogin}>
                    <input className="ww" type="text" name="login" placeholder='Введите логин' onChange={handleChange} value={data.login} />
                    <input className="qq" type="password" name="password" placeholder='Введите пароль' onChange={handleChange} value={data.password} />
                    <input className="qwe" type="submit" value="Войти" />
                </form>
            </div>
        </>
    );
}