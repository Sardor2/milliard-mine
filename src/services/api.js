import { BASE_URL } from "../constants";
import i18n from "../i18next";

const api = (path, { headers, ...options } = {}) => {
  return fetch(BASE_URL + path, {
    headers: {
      Language: i18n.language,
      "Content-type": "application/json",
      ...headers,
    },
    ...options,
  }).then((res) => res.json());
};

export default api;
