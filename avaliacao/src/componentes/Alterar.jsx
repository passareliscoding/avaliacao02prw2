import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Alterar() {
    const [idBusca, setIdBusca] = useState('');
    const [filme, setFilme] = useState(null);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const buscarFilme = () => {
        setLoading(true);
        setErro('');
        setFilme(null);

        axios.get(`https://683098f56205ab0d6c39bd07.mockapi.io/filmes/${idBusca}`)
            .then((res) => setFilme(res.data))
            .catch(() => setErro('❌ Filme não encontrado.'))
            .finally(() => setLoading(false));
    };

    const handleAlterar = (e) => {
        e.preventDefault();
        axios.put(`https://683098f56205ab0d6c39bd07.mockapi.io/filmes/${idBusca}`, filme)
            .then(() => navigate('/'))
            .catch(() => setErro('❌ Erro ao atualizar o filme.'));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilme({ ...filme, [name]: value });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '600px' }}>
                <h2 className="text-center text-primary mb-4">🔍 Alterar Filme</h2>

                <div className="input-group mb-3">
                    <input
                        type="number"
                        name="id"
                        className="form-control"
                        placeholder="Digite o ID do filme"
                        value={idBusca}
                        onChange={(e) => setIdBusca(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={buscarFilme}>Procurar</button>
                    <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>Cancelar</button>
                </div>

                {loading && <p className="text-info">⏳ Buscando filme...</p>}

                {erro && (
                    <div className="alert alert-danger mt-3">
                        <p>{erro}</p>
                        <Link to='/' className="btn btn-outline-secondary mt-2">Voltar</Link>
                    </div>
                )}

                {filme && (
                    <form onSubmit={handleAlterar}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                className="form-control"
                                value={filme.nome}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="genero" className="form-label">Gênero:</label>
                            <input
                                type="text"
                                name="genero"
                                id="genero"
                                className="form-control"
                                value={filme.genero}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="ano" className="form-label">Ano:</label>
                            <input
                                type="text"
                                name="ano"
                                id="ano"
                                className="form-control"
                                value={filme.ano}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">Salvar Alterações</button>
                            <Link to="/" className="btn btn-outline-secondary">Cancelar</Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Alterar;
