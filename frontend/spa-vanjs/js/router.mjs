import { locationHandler } from "./location-handler.mjs";

export const preventNavLinkRedirection = (event) => {
  if (!event.target.matches("nav a")) return;

  event.preventDefault();
  route();
};

export const route = (event = window.event) => {
  event?.preventDefault();
  window.history.pushState({}, "", event?.target.href);
  locationHandler();
};
