import {
  addToCart,
  closeCartOnOutsideClick,
  removeFromCart,
  showHideCart,
  updateCart,
} from "./cart-handler.mjs";
import {
  bodyCover,
  cartOpener,
  decrementor,
  incrementor,
  itemRemover,
  menueCloser,
  menueOpener,
  previewImagesHolder,
  previewNavigator,
  toCart,
} from "./elements.mjs";
import { menueHandler } from "./menue-handler.mjs";
import {
  navigatePictures,
  setCurrentImage,
  showCurrentImage,
} from "./preview-handler.mjs";
import { quantityHandler } from "./quantity-handler.mjs";

[menueOpener, menueCloser, bodyCover].forEach((element) =>
  element?.addEventListener("click", menueHandler)
);

[
  [incrementor, 1],
  [decrementor, -1],
].forEach(([trigger, value]) =>
  trigger?.addEventListener("click", quantityHandler.bind(null, value))
);

toCart?.addEventListener("submit", addToCart);

itemRemover?.addEventListener("click", removeFromCart);

cartOpener?.addEventListener("click", showHideCart);

window.addEventListener("click", closeCartOnOutsideClick);

previewNavigator?.addEventListener("click", navigatePictures);

previewImagesHolder?.addEventListener("click", setCurrentImage);

[updateCart, showCurrentImage].forEach((init) => init());
