import { subscribeSection, successSection } from "./elements.mjs";

export const toggle = (...elements) => {
  elements.map((element) => element?.classList.toggle("hide"));
};

export const toggleSuccess = () => {
  toggle(successSection, subscribeSection);
};
