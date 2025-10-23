import { slideShow } from "./elements.mjs";

export const navigateSlideShow = ({ target }) => {
  const button = target.closest("button");
  if (!button) return;
  setCurrent(button.dataset.navigate);
};

export const { setCurrent, getCurrent, showCurrent, keepSlideShow } = (() => {
  let current = 0,
    onGoing = 0;
  return {
    setCurrent(navigate) {
      current += +navigate;
      const allPicturesCount =
        slideShow?.querySelectorAll("picture").length || 0;
      current =
        current >= allPicturesCount
          ? 0
          : current < 0
          ? allPicturesCount - 1
          : current;
      showCurrent();
    },
    getCurrent() {
      return current;
    },
    showCurrent() {
      const allPictures = slideShow?.querySelectorAll("picture") || [];
      allPictures.forEach((picture) =>
        picture.setAttribute("data-current", false)
      );
      allPictures[current]?.setAttribute("data-current", true);
      keepSlideShow();
    },
    keepSlideShow() {
      clearTimeout(onGoing);
      onGoing = setTimeout(() => setCurrent(1), 10000);
    },
  };
})();

setCurrent(0);
