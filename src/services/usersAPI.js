import axios from "axios";
import { BASE_URL } from "constants/constants";

axios.defaults.baseURL = BASE_URL;

export const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    }
  };

  export const register = async user => {
    return await axios.post(`/users/signup`, user).then(response => response.data);
  }

  export const login = async user => {
    return await axios.post(`/users/login`, user).then(response => response.data);
  }

  export const logout = async () => {
    return await axios.post(`/users/logout`).then(response => response.data);
  }

  export const userData = async () => {
    return await axios.get(`/users/current`).then(response => response.data);
  }