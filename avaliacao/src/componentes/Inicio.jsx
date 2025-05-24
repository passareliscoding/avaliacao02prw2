import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inicio() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://683098f56205ab0d6c39bd07.mockapi.io/filmes')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleClick = (id) => {
        navigate(`/ler/${id}`);
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4 text-primary fw-bold"> Lista de Filmes</h3>

            <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle shadow-sm">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr
                                key={i}
                                onClick={() => handleClick(d.id)}
                                className="row-click"
                            >
                                <td>{d.id}</td>
                                <td>{d.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inicio;
