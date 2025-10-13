import { count } from "./elements.mjs";

export function quantityHandler(change) {
  const currentValue = +count?.value;
  const nextValue = currentValue + change;
  count.value = nextValue >= 0 ? nextValue : 0;
}
