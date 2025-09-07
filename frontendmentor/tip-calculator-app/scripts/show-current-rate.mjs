import { tipSetter } from "./elements.mjs";

export default function showCurrentRate(element) {
  if (!tipSetter?.contains(element)) return;
  [...tipSetter?.children].forEach((child) =>
    child?.classList.remove("active")
  );
  element?.classList.add("active");
}
