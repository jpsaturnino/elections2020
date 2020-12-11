import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './css/style.css';
import api from '../services/api';
import { useForm } from "react-hook-form";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    async function admLogin() {
        const response = await api.post('/admin/login', {email, password});

        if(response.data){
            alert('Logado com sucesso!')
            history.push("/cadastrar");
        } else
            alert('Credenciais Invalidas!')
    }
    
    return(
        <React.Fragment>
            <aside>
                <Link to="/">
                    <button>
                        <span>Voltar</span>
                    </button>
                </Link>
            </aside>
            <div className="container">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit(admLogin)}>
                    <div className="input-block col-1">
                        <label htmlFor="email">Email</label>
                        <input
                            ref={register({
                                required: "email não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "email invalido"
                                }
                            })}
                            name="email" id="email"
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <div className="message">
                            {errors.email && errors.email.message}
                        </div>
                    </div>
                    <div className="input-block col-1">
                        <label htmlFor="password">Senha</label>
                        <input
                            ref={register({
                                required: "senha não pode estar vazia",
                            })}
                            name="password" id="password" type="password"
                            value={password} onChange={e => setPassword(e.target.value)} 
                        />
                        <div className="message">
                            {errors.password && errors.password.message}
                        </div>
                    </div>
                    <footer>
                        <button type="submit">Entrar</button>
                    </footer>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;
