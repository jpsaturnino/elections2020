import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api';
import './css/style.css'
import {FiTrash2, FiEdit3} from 'react-icons/fi'

function Main() {
    const [candidates, setCandidate] = useState([]);

    //Load all registered candidates
    async function fillCandidates(params) {
        const response = await api.get('/candidate');
        setCandidate(response.data);
    }

    useEffect(() => {
        fillCandidates();
    }, []);

    //Remove a candidate by their CPF
    async function removeCandidate(cpf) {
        await api.delete(`/candidate/${cpf}`);
        fillCandidates();
    }

    return (
        <React.Fragment>
            <aside>
                <Link to="/login">
                    <button>
                        <span>Login</span>
                    </button>
                </Link>
            </aside>
            <main>
                <h1>CANDIDATOS CADASTRADOS</h1>
                <ul>
                    {candidates.map(candidate => (
                        <li key={candidate.cpf} className="user-item">
                            <section className="user-button">
                                <button type="button" onClick={() => removeCandidate(candidate.cpf)}>
                                    <FiTrash2 size={16} color="#232323"/>
                                </button>
                                <button type="button">
                                    <FiEdit3 size={16} color="#232323"/>
                                </button>
                            </section>
                            <header>
                                <img alt={candidate.fullName} src={require("./img/" + candidate.avatarUrl)}></img>
                                <div className="user-info">
                                    <strong>{candidate.fullName}</strong>
                                    <span>{candidate.team}</span>
                                </div>
                            </header>
                            <p>Email: {candidate.email}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </React.Fragment>
    );
};

export default Main;