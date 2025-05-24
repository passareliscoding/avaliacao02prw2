import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Ler() {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://683098f56205ab0d6c39bd07.mockapi.io/filmes/${id}`)
            .then((res) => setFilme(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="text-center mt-5 text-primary">Carregando...</p>;
    if (!filme) return <p className="text-center mt-5 text-danger">Filme não encontrado.</p>;

    return (
        <div className="container mt-5 text-center">
            <div className="card shadow-sm p-4">
                <h2 className="text-primary mb-4">🎞️ Detalhes do Filme</h2>
                <p><strong>Nome:</strong> {filme.nome}</p>
                <p><strong>Gênero:</strong> {filme.genero}</p>
                <p><strong>Ano de Lançamento:</strong> {filme.ano}</p>

                <Link to="/" className="btn btn-outline-primary mt-4">
                    Voltar
                </Link>
            </div>
        </div>
    );
}

export default Ler;
