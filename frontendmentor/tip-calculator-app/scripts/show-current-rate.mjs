import { custom, tipSetter } from "./elements.mjs";

export default function showCurrentRate(element) {
  if (!tipSetter?.contains(element)) return;
  [...tipSetter?.children].forEach((child) =>
    child?.classList.remove("active")
  );
  element?.classList.add("active");
}

export function getCurrentRate() {
  const selected = tipSetter?.querySelector(".active");
  if (!selected) return 0;
  if (selected.matches("button")) {
    custom.value = "";
    return selected.dataset.percentage;
  }
  return selected.value;
}
