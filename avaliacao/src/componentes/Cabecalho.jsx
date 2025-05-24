import { NavLink } from "react-router-dom";

const Cabecalho = () => {
    return (
        <header className="bg-light py-4 shadow-sm border-bottom">
            <div className="container text-center">
                <h2 className="text-primary mb-3"> CATÁLOGO DE FILMES</h2>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item mx-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link-custom ${isActive ? 'active-link' : ''}`
                            }
                        >
                            INÍCIO
                        </NavLink>
                    </li>
                    <li className="list-inline-item mx-3">
                        <NavLink
                            to="/criar"
                            className={({ isActive }) =>
                                `nav-link-custom ${isActive ? 'active-link' : ''}`
                            }
                        >
                            CRIAR
                        </NavLink>
                    </li>
                    <li className="list-inline-item mx-3">
                        <NavLink
                            to="/alterar"
                            className={({ isActive }) =>
                                `nav-link-custom ${isActive ? 'active-link' : ''}`
                            }
                        >
                            ALTERAR
                        </NavLink>
                    </li>
                    <li className="list-inline-item mx-3">
                        <NavLink
                            to="/apagar"
                            className={({ isActive }) =>
                                `nav-link-custom ${isActive ? 'active-link' : ''}`
                            }
                        >
                            APAGAR
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Cabecalho;
