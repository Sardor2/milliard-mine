import { useAsync } from "../hooks";
import api from "./api";

const fetchAll = async () => {
  // let main = api("main").then((res) => res.data);
  // let about = api("about").then((res) => res.data);
  // let members = api("members").then((res) => res.data);
  // let partners = api("partners").then((res) => res.data);
  // let images = api("images").then((res) => res.data);
  // let businessTypes = api("types").then((res) => res.data);

  const [main, about, members, partners, images, businessTypes] =
    await Promise.all([
      api("main").then((res) => res.data),
      api("about").then((res) => res.data),
      api("members").then((res) => res.data),
      api("partners").then((res) => res.data),
      api("images").then((res) => res.data),
      api("types").then((res) => res.data),
    ]);

  return {
    main,
    about,
    members,
    partners,
    images,
    businessTypes,
  };
};

const useHomePageData = () => {
  return useAsync(fetchAll);
};

export default useHomePageData;
