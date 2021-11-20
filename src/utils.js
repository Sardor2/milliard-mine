export const getLang = () => {
  if (localStorage !== undefined) {
    return localStorage.getItem("lang");
  }
  return "uz";
};

export const setLang = (lang = "uz") => {
  if (typeof window !== undefined && typeof localStorage !== undefined) {
    localStorage.setItem("lang", lang);

    window.location.reload();
  }
};
