import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Criar from './componentes/Criar';
import Alterar from './componentes/Alterar';
import Apagar from './componentes/Apagar';
import Cabecalho from './componentes/Cabecalho';
import Ler from './componentes/Ler';

function App() {

  return (
    <div>
      <BrowserRouter>
          <Cabecalho/>

          <Routes>

            <Route path='/' element={ <Inicio/> }/>
            <Route path='/ler/:id' element={ <Ler/> }/>
            <Route path='/criar' element={ <Criar/> }/>
            <Route path='/alterar' element={ <Alterar/> }/>
            <Route path='/apagar' element={ <Apagar/> }/>

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
