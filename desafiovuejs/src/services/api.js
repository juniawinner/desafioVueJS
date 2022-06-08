import axios from 'axios'

const api = axios.create({
    baseURL: 'https://express-api-rest.azurewebsites.net',
});

export default api