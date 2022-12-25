import { useState, FormEvent} from 'react';
import * as C from './styles';
import api from '../../service/api';
import { Hotel, HotelForm } from '../../types';



const AtualizarHoteis = () => {

    const [id, setId] = useState<number>();
    const [nome, setNome] = useState<number>();
    const [ cnpj, setCnpj ] = useState<number>();
    const [pais, setPais] = useState<string>();
    const [estado, setEstado] = useState<string>();
    const [cidade, setCidade] = useState<string>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [data, setData] = useState<Hotel>();
    

    const handleCreateHotel = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const HotelObj = {
            id,
            nome,
            cnpj,
            pais,
            estado,
            cidade
        } as Hotel;

        let response = await api('PUT', '/atualizarHotel', HotelObj);
        setData(response.data);
        setLoading(false);
        
        
    }

    return (
        <C.Container>
            <C.Form onSubmit={handleCreateHotel}>
                <h2>Atualizar</h2>
                <label>Id:</label>
                <input type="number" onChange={e => setId(Number(e.target.value))} />
                <label>Nome: </label>
                <input type="number" onChange={e => setNome(Number(e.target.value))} />
                <label>Cnpj:</label>
                <input type="number" onChange={e => setCnpj(Number(e.target.value))}/>
                <label>Pais:</label>
                <input type="text" onChange={e => setPais(e.target.value)} />
                <label>Estado:</label>
                <input type="text" onChange={e => setEstado(e.target.value)}/>
                <label>Cidade:</label>
                <input type="text" onChange={e => setCidade(e.target.value)} />
                
                <button type='submit'>Atualizar</button>
                {loading && !data && <h4>Atualizando..</h4>}
                {loading && data && <h4 style={{color:'green'}}>Atualizado com sucesso!</h4>}
            </C.Form>
            
        
        </C.Container>    
        
    )
}

export default AtualizarHoteis;