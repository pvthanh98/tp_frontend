import axios from 'axios';

export default function(){
    const instance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000,
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return instance;
}