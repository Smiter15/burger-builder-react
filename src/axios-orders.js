import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-1ba2a.firebaseio.com'
});

export default instance;