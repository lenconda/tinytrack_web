import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.timeout = 3600000;
axios.interceptors.response.use(response => {
  if (response.data.data &&
      Object.prototype.toString.call(response.data.data) === '[object String]') { toast.success(response.data.data) }
  return response;
}, error => {
  if (error.response.data.message) { toast.error(error.response.data.message) }
});

export default axios;
