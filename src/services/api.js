import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DanAraujjo/rocketshoes-api',
});

export default api;
