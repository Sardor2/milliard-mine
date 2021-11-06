import { useAsync } from "../hooks";
import api from "./api";

export const useMain = () => {
  return useAsync(() => api("main").then((res) => res.data));
};
