import { useAsync } from "../hooks";
import api from "./api";

const useBusinessDetail = (slug) =>
  useAsync(() => api(`business-type/${slug}`).then((res) => res.data));

export default useBusinessDetail;
