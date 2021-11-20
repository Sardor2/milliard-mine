export const getLang = () => localStorage.getItem("lang") ?? "uz";

export const setLang = (lang = "uz") => {
  localStorage.setItem("lang", lang);
  if (typeof window !== undefined) {
    window.location.reload();
  }
};
