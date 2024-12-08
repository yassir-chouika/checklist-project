import axios from 'axios';

const api = axios.create({
  baseURL: 'https://greenvelvet.alwaysdata.net/pfc',
  params: {
    token: 'baa853fe1904ea4905d4a053b7ba13b8f4bf64a7'
  }
});

export default api;