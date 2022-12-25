import axios from "axios";


const api = async (method: string, path: string = '', data?: any) => {
    const URL = `http://localhost:3333${path}`
    let response = await axios({
        method,
        url: URL,
        data
    });
    return response;
}

  


export default api;