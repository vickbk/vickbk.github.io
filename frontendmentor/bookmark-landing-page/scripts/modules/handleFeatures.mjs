import { featuresDisplay } from "./elements.mjs";

export const handleFeatures = ({ target }) => {
  const controller = target.closest("input");
  if (!controller) return;
  showCurrentDisplay(
    getFeaturesDisplay(controller.getAttribute("aria-describedby"))
  );
};

const getFeaturesDisplay = (id) => {
  console.log(id);
  return document.getElementById(id);
};

const showCurrentDisplay = (currentDisplay) => {
  if (!currentDisplay) return;
  featuresDisplay.querySelector(".active")?.classList.remove("active");
  currentDisplay.classList.add("active");
};
