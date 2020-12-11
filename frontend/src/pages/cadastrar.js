import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/style.css';
import api from '../services/api';
import { useForm } from "react-hook-form";

function Cadastrar() {
    const [fullName, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [voterID, setID] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [team, setTeam] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [uf, setUF] = useState('');
    const [num, setNum] = useState('');
    const [neighborhood, setNe] = useState('');
    const [complement, setComplement] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const { handleSubmit, register, errors } = useForm();

    async function uploadImg(e) {
        e.preventDefault();
        const imgData = new FormData();
        imgData.append('avatar', avatar);
        
        const resUpload = await api.post('/upload', imgData, {
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        });
        setAvatarUrl(resUpload.data);
    }

    async function newCandidate() {
        await api.post('/candidate', {
            fullName, cpf, voterID,
            email, birth, phone,
            team, address, zipCode,
            uf, num, neighborhood, complement, avatarUrl
        });
        setName('');
        setCPF('');
        setID('');
        setEmail('');
        setBirth('');
        setPhone('');
        setTeam('');
        setAddress('');
        setZipCode('');
        setUF('');
        setNum('');
        setNe('');
        setComplement('');
        setAvatarUrl('');    
    }

    return (
        <React.Fragment>
            <aside>
                <Link to="/">
                    <button>
                        <span>Voltar</span>
                    </button>
                </Link>
            </aside>
            <div className="container">
                <h1>CADASTRAR DADOS</h1>
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(newCandidate)}>
                    <div className="input-block">
                        <label htmlFor="fullName">Nome Completo</label>
                        <input
                            ref={register({
                                required: "nome não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z ]{4,25}$/i,
                                    message: "nome invalido, deve conter de 4 à 25 letras apenas"
                                }
                            })}
                            name="fullName" id="fullName"
                            value={fullName} onChange={e => setName(e.target.value)}
                        />
                        <div className="message">
                            {errors.fullName && errors.fullName.message}
                        </div>
                    </div>
                    <div className="input-block">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            ref={register({
                                required: "cpf não pode estar vazio",
                                pattern: {
                                    value: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,
                                    message: "cpf invalido. XXX.XXX.XXX-XX"
                                }
                            })}
                            name="cpf" id="cpf"
                            value={cpf} onChange={e => setCPF(e.target.value)} 
                        />
                        <div className="message">
                            {errors.cpf && errors.cpf.message}
                        </div>
                    </div>
                    <div className="input-block">
                        <label htmlFor="voterID">Numero do Título de Eleitor</label>
                        <input
                            ref={register({
                                required: "título de eleitor não pode estar vazio",
                                pattern: {
                                    value: /^(([0-9]{4}-[0-9]{2}))$/,
                                    message: "título de eleitor invalido. XXXX-XX"
                                }
                            })}
                            name="voterID" id="voterID"
                            value={voterID} onChange={e => setID(e.target.value)} 
                        />
                        <div className="message">
                            {errors.voterID && errors.voterID.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="email">Email</label>
                        <input
                            ref={register({
                                required: "email não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "email invalido. formato: exemplo@email.com"
                                }
                            })}
                            name="email" type="email" id="email" 
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <div className="message">
                            {errors.email && errors.email.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="birth">Data de Nascimento</label>
                        <input
                            ref={register({
                                required: "data não pode estar vazia",
                            })}
                            name="birth" type="date" id="birth" 
                            value={birth} onChange={e => setBirth(e.target.value)}
                        />
                        <div className="message">
                            {errors.birth && errors.birth.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            ref={register({
                                required: "numero não pode estar vazio",
                                pattern: {
                                    value: /^(([0-9]{5}-[0-9]{4}))$/,
                                    message: "numero invalido. XXXXX-XXXX"
                                }
                            })}
                            name="phone" id="phone" 
                            value={phone} onChange={e => setPhone(e.target.value)}
                        />
                        <div className="message">
                            {errors.phone && errors.phone.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="team">Partido</label>
                        <input
                            ref={register({
                                required: "partido não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z]{4,25}$/i,
                                    message: "partido invalido, deve conter de 4 à 20 letras apenas"
                                }
                            })}
                            name="team" id="team"
                            value={team} onChange={e => setTeam(e.target.value)}
                        />
                        <div className="message">
                            {errors.team && errors.team.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="address">Endereço</label>
                        <input
                            ref={register({
                                required: "endereço não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z]{4,25}$/i,
                                    message: "endereço invalido, deve conter de 4 à 25 letras apenas"
                                }
                            })}
                            name="address" id="address" 
                            value={address} onChange={e => setAddress(e.target.value)}
                        />
                        <div className="message">
                            {errors.address && errors.address.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="zipCode">CEP</label>
                        <input
                            ref={register({
                                required: "cep não pode estar vazio",
                                pattern: {
                                    value: /^(([0-9]{5}-[0-9]{3}))$/,
                                    message: "cep invalido. XXXXX-XXX"
                                }
                            })}
                            name="zipCode" id="zipCode" 
                            value={zipCode} onChange={e => setZipCode(e.target.value)}
                        />
                        <div className="message">
                            {errors.zipCode && errors.zipCode.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="uf">UF</label>
                        <input
                            ref={register({
                                required: "uf não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z]{2,}$/i,
                                    message: "uf invalido, deve conter de 2 letras apenas"
                                }
                            })}
                            name="uf" id="uf" 
                            value={uf} onChange={e => setUF(e.target.value)}
                        />
                        <div className="message">
                            {errors.uf && errors.uf.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="num">Número</label>
                        <input
                            ref={register({
                                required: "número não pode estar vazio",
                                pattern: {
                                    value: /^[0-9]{1,5}$/i,
                                    message: "número invalido, deve conter de 1 à 5 números apenas"
                                }
                            })}
                            name="num" id="num" 
                            value={num} onChange={e => setNum(e.target.value)}
                        />
                        <div className="message">
                            {errors.num && errors.num.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="neighborhood">Bairro</label>
                        <input
                            ref={register({
                                required: "bairro não pode estar vazio",
                                pattern: {
                                    value: /^[A-Z]{4,20}$/i,
                                    message: "bairro invalido, deve conter de 4 à 20 letras apenas"
                                }
                            })}     
                            name="neighborhood" id="neighborhood" 
                            value={neighborhood} onChange={e => setNe(e.target.value)}
                        />
                        <div className="message">
                            {errors.neighborhood && errors.neighborhood.message}
                        </div>                        
                    </div>
                    <div className="input-block">
                        <label htmlFor="complement">Complemento</label>
                        <input
                            name="complement" id="complement" 
                            value={complement} onChange={e => setComplement(e.target.value)}
                        />                      
                    </div>
                    <div id="file-submit">
                        <input
                            ref={register({
                                required: "imagem não pode estar vazia",
                            })}
                            type="file"
                            accept=".jpg"
                            onChange={e => { setAvatar(e.target.files[0]) }}
                            name="avatar" id="avatar">
                        </input>
                        <button onClick={uploadImg}>Enviar</button>
                        <div className="message">
                            {errors.avatar && errors.avatar.message}
                        </div>  
                    </div>
                    <footer>
                        <button type="submit">Salvar</button>
                    </footer>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Cadastrar;