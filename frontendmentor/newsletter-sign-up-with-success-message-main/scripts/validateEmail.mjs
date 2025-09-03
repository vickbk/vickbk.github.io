import { subscribeError } from "./elements.mjs";

export const validateEmail = (email) => {
  subscribeError?.classList.add("hide");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) return true;
  subscribeError?.classList.remove("hide");
  return false;
};
