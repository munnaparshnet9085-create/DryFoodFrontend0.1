export const setAdmin = (data) =>
  localStorage.setItem("admin", JSON.stringify(data));

export const getAdmin = () =>
  JSON.parse(localStorage.getItem("admin"));

export const removeAdmin = () =>
  localStorage.removeItem("admin");
