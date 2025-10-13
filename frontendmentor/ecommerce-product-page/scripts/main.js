import { addToCart } from "./cart-handler.mjs";
import {
  bodyCover,
  decrementor,
  incrementor,
  menueCloser,
  menueOpener,
  toCart,
} from "./elements.mjs";
import { menueHandler } from "./menue-handler.mjs";
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
