export const setUserStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserStorage = () => {
  const result = localStorage.getItem("user");
  const userData = result ? JSON.parse(result) : null;
  return userData;
};
