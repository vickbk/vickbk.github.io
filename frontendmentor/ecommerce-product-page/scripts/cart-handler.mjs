import { count, itemsCount } from "./elements.mjs";

let cartTotal = 0;
export function addToCart(e) {
  e.preventDefault();
  if (!count) return;
  cartTotal += +count.value;
  count.value = 0;
  updateCart();
}

// to be added
export const updateCart = () => {
  if (!itemsCount) return;
  itemsCount.innerText = cartTotal;
  itemsCount.dataset.count = cartTotal;
};
