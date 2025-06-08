import axios from "axios";


const api = axios.create({
    baseURL:"https://agendamentos-cilios.onrender.com"
})

export default api
