import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Apagar() {
    const [idBusca, setIdBusca] = useState('');
    const [filme, setFilme] = useState(null);
    const [erro, setErro] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const buscarFilme = () => {
        setLoading(true);
        setErro('');
        setFilme(null);
        setMensagem('');

        axios.get(`https://683098f56205ab0d6c39bd07.mockapi.io/filmes/${idBusca}`)
            .then((res) => setFilme(res.data))
            .catch(() => setErro('Filme não encontrado.'))
            .finally(() => setLoading(false));
    };

    const handleDeletar = () => {
        setMensagem('');
        setErro('');

        axios.delete(`https://683098f56205ab0d6c39bd07.mockapi.io/filmes/${idBusca}`)
            .then(() => {
                setMensagem('Filme apagado com sucesso');
                setFilme(null);
            })
            .catch(() => setErro('Erro ao apagar o filme.'));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Busca e Remoção de Filme</h2>

            <div className="mb-3">
                <label htmlFor='id' className="form-label">ID:</label>
                <input type='number' className="form-control mb-2" name='id' value={idBusca}
                    onChange={(e) => setIdBusca(e.target.value)} />
                <button className="btn btn-primary me-2" onClick={buscarFilme}>Procurar</button>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
            </div>

            {loading && <p className="text-info">Buscando filme...</p>}

            {erro && (
                <div className="alert alert-danger">
                    <p>{erro}</p>
                    <button className="btn btn-outline-secondary mt-2" onClick={() => navigate('/')}>Voltar</button>
                </div>
            )}

            {filme && (
                <div className="card p-3 mb-3 d-flex gap-3 flex-wrap">
                    <h4>Dados do Filme</h4>
                    <p><strong>Nome:</strong> {filme.nome}</p>
                    <p><strong>Gênero:</strong> {filme.genero}</p>
                    <p><strong>Ano:</strong> {filme.ano}</p>

                    <div className="d-flex gap-3">
                        <button className="btn btn-danger flex-fill" onClick={handleDeletar}>Apagar</button>
                        <button className="btn btn-secondary flex-fill" onClick={() => navigate('/')}>Cancelar</button>
                    </div>
                </div>

            )}

            {mensagem && (
                <div className="alert alert-success">
                    <p>{mensagem}</p>
                    <button className="btn btn-outline-secondary mt-2" onClick={() => navigate('/')}>Voltar</button>
                </div>
            )}
        </div>
    );
}

export default Apagar;
