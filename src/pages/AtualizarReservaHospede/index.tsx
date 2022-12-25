import { useState, FormEvent} from 'react';
import * as C from './styles';
import api from '../../service/api';
import { CreateReservaHospede, Hospede, ReservaHospede } from '../../types';
import moment from 'moment';



const AtualizarReservaHospede = () => {

    const [reservaId, setReservaId] = useState<number>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [hotelid, setHotelId] = useState<number>();
    const [numeroReserva, setNumeroReserva] = useState<number>();
    const [apartamento, setApartamento] = useState<number>();
    const [dataCheckIn, setDataCheckIn] = useState<Date>();

    const [dataCheckOut, setDataCheckOut] = useState<Date>();
    const [status, setStatus] = useState<number>();
    const [hospedes, setHospedes] = useState<Hospede[]>([]);

    const [data, setData] = useState<ReservaHospede>();

    const [hospedeId, setHospedeId] = useState<number>();

    const [nome, setNome] = useState<string>('');
    const [sobrenome, setSobrenome] = useState<string>('');

    const [hospedeId2, setHospedeId2] = useState<number>();
    
    const [nome2, setNome2] = useState<string>('');
    const [sobrenome2, setSobrenome2] = useState<string>('');

    
    
    console.log(typeof(dataCheckIn))


    const handleCreateHotel = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
       
        let hospedesObj = [
            {
                id:hospedeId,
                nome,
                sobrenome
            },
            {
                id:hospedeId2,
                nome2,
                sobrenome2
            }
        ] as Hospede[];

        setHospedes(hospedesObj);

        let reservaHospedeObj = {
            idhotel: Number(hotelid),
            apartamento: apartamento,
            datacheckin: dataCheckIn,
            datacheckout: dataCheckOut,
            hospedes: hospedes,
            status: Number(status),
            numeroreserva: Number(numeroReserva)      
        } as CreateReservaHospede;
        console.log(reservaHospedeObj);


        let response = await api('PUT', `/atualizarReservaHospede/${reservaId}`,reservaHospedeObj);
        setData(response.data);
        setLoading(false);
        
        
    }


    
  

    return (
        <C.Container>
            <C.Form onSubmit={handleCreateHotel}>
                <h2>Atualizar Reserva Hospede</h2>

                <label>ID da Reserva</label>
                <input type="number" onChange={e => setReservaId(Number(e.target.value))} />

                <label>ID do Hotel</label>
                <input type="number" onChange={e => setHotelId(Number(e.target.value))} />
                
                <label>Reserva</label>
                <input type="number" onChange={e => setNumeroReserva(Number(e.target.value))} />
                
                <label>Apartamento</label>
                <input type="number" onChange={e => setApartamento(Number(e.target.value))} />
                
                <label>Status</label>
                <input type="number" onChange={e => setStatus(Number(e.target.value))} />
                
                <label>CheckIn</label>
                <input type="date" onChange={e => setDataCheckIn(new Date(moment(e.target.value).format("YYYY-MM-DD")))} />
                
                <label>CheckOut</label>
                <input type="date" onChange={e=> setDataCheckOut(new Date(moment(e.target.value).format("YYYY-MM-DD")))}/>

                <label>Hospedes</label>

                
                <label>ID do Hospede</label>
                <input type="number"  onChange={e => setHospedeId(Number(e.target.value))} />
                
                <label>Nome</label>
                <input type="text" placeholder='Nome' onChange={ e => setNome(e.target.value)}/>

                <label>Sobrenome</label>
                <input type="text" placeholder="Sobrenome" onChange={ e => setSobrenome(e.target.value)} />

                <label>ID do Hospede</label>
                <input type="number" onChange={e => setHospedeId2(Number(e.target.value))} />
                
                <label>Nome</label>
                <input type="text" placeholder='Nome' onChange={ e => setNome2(e.target.value)} />

                <label>Sobrenome</label>
                <input type="text" placeholder="Sobrenome" onChange={ e => setSobrenome2(e.target.value)} />
                

                <button type='submit'>Atualizar</button>
                {loading && !data && <h4>Atualizando..</h4>}
                {!loading && data && <h4 style={{color:'green'}}>Atualizado com sucesso!</h4>}
            </C.Form>
            
        
        </C.Container>    
        
    )
}

export default AtualizarReservaHospede;