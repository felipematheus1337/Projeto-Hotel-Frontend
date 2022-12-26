/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, FormEvent} from 'react';
import * as C from "./styles";
import api from '../../service/api';
import { CreateReservaHospede, Hospede, ReservaHospede } from '../../types';
import moment from 'moment';



const AtualizarReservaHospede = () => {

    const [loading, setLoading] = useState<Boolean>(false);
    const [hotelid, setHotelId] = useState<number>();
    const [numeroReserva, setNumeroReserva] = useState<number>();
    const [apartamento, setApartamento] = useState<number>();
    const [dataCheckIn, setDataCheckIn] = useState<Date>();
    const [reservaId, setReservaId] = useState<number>();

    const [dataCheckOut, setDataCheckOut] = useState<Date>();
    const [status, setStatus] = useState<number>();

    const [data, setData] = useState<ReservaHospede>();


    const [inputFields, setInputFields] = useState<Hospede[]>([
        { id:0, nome: '', sobrenome: '' }
    ]);
    



    const handleCreateHotel = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
       
        let hospedesObj = [...inputFields] as Hospede[];

        //setHospedes(hospedesObj);

        let reservaHospedeObj = {
            idhotel: Number(hotelid),
            apartamento: apartamento,
            datacheckin: dataCheckIn,
            datacheckout: dataCheckOut,
            hospedes: hospedesObj,
            status: Number(status),
            numeroreserva: Number(numeroReserva)      
        } as CreateReservaHospede;
        

        let response = await api('POST', `/atualizarReservaHospede/${reservaId}`,reservaHospedeObj);
        setData(response.data);
        setLoading(false);
        
    }


    const handleFormChange = (index:number,event:React.ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        if (String(event.target.name) === 'nome') {
            data[index]['nome'] = event.target.value;
            setInputFields(data);
        } else if(String(event.target.name) === 'sobrenome') {
            data[index]['sobrenome'] = event.target.value;
            setInputFields(data);
        } else {
            data[index]['id'] = Number(event.target.value);
            setInputFields(data);
        }
        
    }

    const addFields = () => {
        let newField = { id:0,nome: '', sobrenome: '' };

        setInputFields([...inputFields, newField]);
    }

    const removeFields = (index:number) => {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <C.Container>
            <C.Form onSubmit={handleCreateHotel}>
                <h2>Atualizar Reserva Hospede</h2>

                <label>ID da Reserva</label>
                <input type="number" onChange={ e => setReservaId(Number(e.target.value))} />

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

                
             
                {inputFields.map((input, index) => {
                    return (
                        <C.Hospede key={index}>
                         <label>ID do Hospede</label>
                            <input
                                name="id"
                                placeholder="ID"
                                value={input.id}
                                onChange={event => handleFormChange(Number(index), event)}
                            />
                            
                            <label>Nome</label>
                            <input
                                name='nome'
                                placeholder='Nome'
                                value={input.nome}
                                onChange={event => handleFormChange(Number(index), event)}
                            />
                            <label>Sobrenome</label>
                            <input
                                name='sobrenome'
                                placeholder='Sobrenome'
                                value={input.sobrenome}
                                onChange={event => handleFormChange(Number(index), event)}
                            />
                            <button onClick={() => removeFields(index)}>Remover</button>
                       </C.Hospede>
                   )
                })}
                
                <button onClick={addFields}>Adicionar Hospede</button>

                <button type='submit'>Cadastrar</button>
                {loading && !data && <h4>Cadastrando..</h4>}
                {!loading && data && <h4 style={{color:'green'}}>Cadastrado com sucesso!</h4>}
            </C.Form>
            
        
        </C.Container>    
        
    )
}

export default AtualizarReservaHospede;