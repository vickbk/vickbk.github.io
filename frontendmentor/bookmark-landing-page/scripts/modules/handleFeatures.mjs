import { featuresDisplay } from "./elements.mjs";

export const handleFeatures = ({ target }) => {
  const controller = target.closest("input");
  if (!controller) return;
  const displayId = controller.getAttribute("aria-describedby") || "undefined";
  showCurrentDisplay(document.getElementById(displayId));
};

const showCurrentDisplay = (currentDisplay) => {
  if (!currentDisplay) return;
  featuresDisplay.querySelector(".active")?.classList.remove("active");
  currentDisplay.classList.add("active");
};
