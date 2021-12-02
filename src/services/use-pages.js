import { useAsync } from "../hooks";
import api from "./api";

export const usePages = () =>
  useAsync(() => api("pages").then((res) => res.data));
