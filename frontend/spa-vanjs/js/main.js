import { locationHandler } from "./location-handler.mjs";
import { preventNavLinkRedirection } from "./router.mjs";

document.addEventListener("click", preventNavLinkRedirection);
locationHandler();
