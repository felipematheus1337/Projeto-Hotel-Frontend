import { useEffect } from "react";
import * as C from "./home.styles";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
      <C.Container>
        <C.Utils><Link to="/cadastroHoteis">Cadastro de Hoteis</Link></C.Utils>
        <C.Utils><Link to="/listarHoteis">Listar Hoteis</Link></C.Utils>
        <C.Utils><Link to="/atualizarHoteis">Atualizar Hoteis</Link></C.Utils>
        <C.Utils><Link to="/cadastroReservaHospede">Cadastro de Reserva e Hospede</Link></C.Utils>
        <C.Utils><Link to="/listarReservaHospede">Listar Reservas e Hospedes</Link></C.Utils>
        <C.Utils><Link to="/atualizarReservaHospede">Atualizar Reservas e Hospedes</Link></C.Utils>
      </C.Container>
    )
}


export default Home;