import axios from "axios";


const api = async (method: string, path: string = '', data?: any) => {
    console.log(data);
    console.log(path);
    const URL = `http://localhost:3333${path}`
    let response = await axios({
        method,
        url: URL,
        data
    });
    return response;
}

  


export default api;