import { useAsync } from "../hooks";
import api from "./api";

export const useBusinesses = (slug) =>
  useAsync(() => api(`business-types/${slug}`).then((res) => res.data));
