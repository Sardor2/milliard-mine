export const getLang = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("lang") ?? "uz";
  }
  return "uz";
};

export const setLang = (lang = "uz") => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("lang", lang);
    window.location.reload();
  }
};
