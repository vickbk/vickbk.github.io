import displayData from "./displayData.mjs";
import { periodSelector } from "./elements.mjs";

// change the period of data to be displayed
export default function periodChanger(e) {
  const { target } = e;
  // ignore if the target element is not a link
  if (!target.matches("a")) return;
  // change the current active element
  setActiveSelector(target);
  // set the data on the page based on the selector
  displayData(target.dataset.selector);
}

// change the current element with the active class
const setActiveSelector = (target) => {
  const active = periodSelector?.querySelector(".active");
  if (active === target) return;
  active.classList.remove("active");
  target.classList.add("active");
};
