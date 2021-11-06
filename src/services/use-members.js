import { useAsync } from "../hooks";
import api from "./api";

export const useMembers = () =>
  useAsync(() => api("members").then((res) => res.data));
