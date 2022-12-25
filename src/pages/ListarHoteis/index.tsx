import { useEffect,useState } from "react"
import * as C from "./styles";
import api from "../../service/api";
import { Hotel } from "../../types";

export const ListarHoteis = () => {
    const [response, setResponse] = useState<Hotel[]>([]);
    
    const [loading, setLoading] = useState<Boolean>(false);
  
    useEffect(() => {
     const getData = async (method:string,path:string) => {
      const response = await api(method, path);
         setResponse(response.data);
         setLoading(true);
         
    }
    getData("GET", "/buscarHotel");
    },[])

 

    return (
        <C.Container>
            {loading && <>
                    {response.map(res => (
                        <C.Result>
                            <h3> Nome: {res.nome}</h3>
                            <h5>CNPJ: {res.cnpj}</h5>
                            <h5>Pais: {res.pais}</h5>
                            <h5>Estado: {res.estado}</h5>
                            <h5>Cidade: {res.cidade}</h5>
                        </C.Result>
                        
                  ))}    
             </>
            }
       </C.Container>
    )
}


