import { cover, navCloser, navOpener } from "./elements.mjs";
import { showHideNavbar } from "./handle-navbar.mjs";

[navCloser, navOpener, cover].forEach((trigger) =>
  trigger?.addEventListener("click", showHideNavbar)
);
