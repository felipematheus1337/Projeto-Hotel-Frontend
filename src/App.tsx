import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ListarHoteis } from './pages/ListarHoteis';
import { ArrowLeft } from './components/ArrowLeft';
import "./App.css";
import { ListarReservaHospedes } from './pages/ListarReservaHospedes';
import CadastroHoteis from './pages/CadastroHoteis';
import AtualizarHoteis from './pages/AtualizarHoteis';
import CadastrarReservaHospede from './pages/CadastroReservaHospede';
import AtualizarReservaHospede from './pages/AtualizarReservaHospede';

const App =  () => {

  
  return (
    <main>
      <Router>
        <ArrowLeft/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listarHoteis" element={<ListarHoteis />} />
          <Route path="/listarReservaHospede" element={<ListarReservaHospedes />} /> 
          <Route path="/cadastroHoteis" element={<CadastroHoteis />} />
          <Route path="/atualizarHoteis" element={<AtualizarHoteis />} />
          <Route path="/cadastroReservaHospede" element={<CadastrarReservaHospede />} />
          <Route path="/atualizarReservaHospede" element={ <AtualizarReservaHospede/>} />
        </Routes>
      </Router>
   </main>
  )
}

export default App;