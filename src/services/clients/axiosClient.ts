import config from '@src/config';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: config.api.baseUrl,
});

export default axiosClient;
