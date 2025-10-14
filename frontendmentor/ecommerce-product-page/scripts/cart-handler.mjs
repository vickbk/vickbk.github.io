import {
  cart,
  cartOpener,
  cartTotalDisplay,
  count,
  itemsCount,
  totalNumber,
} from "./elements.mjs";

let cartTotal = 0;
export function addToCart(e) {
  e.preventDefault();
  if (!count) return;
  cartTotal += +count.value;
  count.value = 0;
  updateCart();
}

export const removeFromCart = () => {
  cartTotal = 0;
  updateCart();
};

export const updateCart = () => {
  if (!itemsCount || !totalNumber || !cart || !cartTotalDisplay) return;
  [itemsCount, totalNumber].forEach((e) => (e.innerText = cartTotal));
  // itemsCount.innerText = cartTotal;
  [itemsCount, cart].forEach((e) => (e.dataset.count = cartTotal));
  itemsCount.dataset.count = cartTotal;
  cartTotalDisplay.innerText = `$${125 * cartTotal}`;
};

export const showHideCart = () => {
  if (cart.open) return hideCart();
  cart.show();
};

export const hideCart = () => {
  if (cart.open) cart.close();
};

export const closeCartOnOutsideClick = ({ target }) => {
  if (!cart.open) return;
  const clickOnCart = [cart, cartOpener].some((element) =>
    element.contains(target)
  );
  if (!clickOnCart) hideCart();
};
