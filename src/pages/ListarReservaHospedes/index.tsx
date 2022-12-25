import { useEffect,useState } from "react"
import * as C from "./styles";
import api from "../../service/api";
import { ReservaHospede } from "../../types";


export const ListarReservaHospedes = () => {
    const [response, setResponse] = useState<ReservaHospede[]>([]);
    
    const [loading, setLoading] = useState<Boolean>(false);
  
    useEffect(() => {
     const getData = async (method:string,path:string) => {
      const response = await api(method, path);
         setResponse(response.data);
         setLoading(true);
         
    }
    getData("GET", "/buscarReservaHospede");
    },[])

 

    return (
        <C.Container>
            {loading && <>
                    {response.map(res => (
                        <C.Result>
                            <h3>Reserva: {res.numeroreserva}</h3>
                            <h5>Apartamento: {res.apartamento}</h5>
                            <h5>CheckIn: {res.dataCheckIn}</h5>
                            <h5>CheckOut: {res.dataCheckOut}</h5>
                            <h5>status: {res.status}</h5>
                            <p>Hospedes:</p>
                            <ul>
                                {res.hospedes.map(h => (
                                    <>
                                        <li>{h.nome} {h.sobrenome}</li>
                                    </>
                                ))}
                            </ul>
                            <h5>Nome do hotel: {res.hotel.nome}</h5>
                            <h5>cnpj do hotel: {res.hotel.cnpj}</h5>
                            <h5>Pais do hotel: {res.hotel.pais}</h5>
                            <h5>Estado do hotel: {res.hotel.estado}</h5>
                            <h5>Cidade do hotel: {res.hotel.cidade}</h5>
                        </C.Result>
                        
                  ))}    
             </>
            }
       </C.Container>
    )
}


