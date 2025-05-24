import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Criar() {
    const [values, setValues] = useState({
        nome: '',
        genero: '',
        ano: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://683098f56205ab0d6c39bd07.mockapi.io/filmes', values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                <h2 className="text-center text-primary mb-4">🎬 Criar Filme</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            className="form-control"
                            placeholder="Digite o nome do filme"
                            onChange={e => setValues({ ...values, nome: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Gênero:</label>
                        <input
                            type="text"
                            name="genero"
                            id="genero"
                            className="form-control"
                            placeholder="Digite o gênero do filme"
                            onChange={e => setValues({ ...values, genero: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ano" className="form-label">Ano:</label>
                        <input
                            type="number"
                            name="ano"
                            id="ano"
                            className="form-control"
                            placeholder="Digite o ano do filme"
                            onChange={e => setValues({ ...values, ano: e.target.value })}
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Criar</button>
                        <Link to="/" className="btn btn-outline-secondary">Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Criar;
