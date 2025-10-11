import { navCloser, navOpener } from "./elements.mjs";
import { showHideNavbar } from "./handle-navbar.mjs";

[navCloser, navOpener].forEach((trigger) =>
  trigger.addEventListener("click", showHideNavbar)
);
