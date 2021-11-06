import { BASE_URL } from "../constants";

const api = (path, { headers, ...options } = {}) => {
  return fetch(BASE_URL + path, {
    headers: {
      Language: localStorage.getItem("lang") ?? "uz",
      "Content-type": "application/json",
      ...headers,
    },
    ...options,
  }).then((res) => res.json());
};

export default api;
