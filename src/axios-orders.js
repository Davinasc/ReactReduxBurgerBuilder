import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-hamburger-d57b4.firebaseio.com/'
});

export default instance;