import Axios from 'axios';
import interceptors from './interceptors';

const axios = Axios.create({

    baseURL: 'http://localhost:5000/',
    
})

interceptors(axios);

export default axios;