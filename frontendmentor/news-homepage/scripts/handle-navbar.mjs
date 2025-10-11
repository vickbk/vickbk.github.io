import { cover, navbar } from "./elements.mjs";

let showing = false;
export const showHideNavbar = () => {
  [
    [navbar, "sm-hide"],
    [cover, "hide"],
  ].forEach(([element, className]) =>
    element.classList[showing ? "add" : "remove"](className)
  );
  showing = !showing;
};
