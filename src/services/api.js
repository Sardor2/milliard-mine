import { BASE_URL } from "../constants";
import { getLang } from "../utils";
import axios from "axios";

// const api = (path, { headers, ...options } = {}) => {
//   return fetch(BASE_URL + path, {
//     headers: {
//       Language: getLang(),
//       "Content-type": "application/json",
//       ...headers,
//     },
//     ...options,
//   }).then((res) => res.json());
// };

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Language: getLang() ?? "uz",
  },
});

api.interceptors.response.use((response) => response.data);

export default api;
