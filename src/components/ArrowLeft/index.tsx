import { useNavigate } from "react-router-dom";
import * as C from "./styles";

export const ArrowLeft = () => {

    const navigate = useNavigate();


    const handleToHome = () => {
        navigate("/")
    }

    return (
         <C.Container onClick={handleToHome}>
            ⬅️
        </C.Container>
        
    )
}