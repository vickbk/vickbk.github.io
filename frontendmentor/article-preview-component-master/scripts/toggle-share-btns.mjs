import { shareBtns, socialBtns } from "./elements.mjs";
const togglers = [...shareBtns];
export default function toggleShareBtns(e) {
  const { target } = e;
  const isToggler = !!togglers.find(
    (btn) => btn === target || btn.contains(target)
  );
  if (isToggler) socialBtns.classList.toggle("hide");
  else {
    const isPopup = !!(socialBtns === target || socialBtns.contains(target));
    if (!isPopup) socialBtns.classList.add("hide");
  }
}
