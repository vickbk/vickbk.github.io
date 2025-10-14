import { itemDisplay } from "./elements.mjs";

export const openCloseLightBox = () => {
  itemDisplay?.[itemDisplay.open ? "close" : "showModal"]();
};
