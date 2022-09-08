import axios from "axios";

const BASE_URL = "https://api.itbook.store/1.0/";

const config = {
  baseURL: BASE_URL,
};

const api = axios.create(config);

export default api;
