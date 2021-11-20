import { BASE_URL } from "../constants";
import { getLang } from "../utils";

const api = (path, { headers, ...options } = {}) => {
  return fetch(BASE_URL + path, {
    headers: {
      Language: getLang(),
      "Content-type": "application/json",
      ...headers,
    },
    ...options,
  }).then((res) => res.json());
};

export default api;
