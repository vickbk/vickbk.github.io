import { mainImagePreview, previewImagesHolder } from "./elements.mjs";

let current = 0;
const images = previewImagesHolder.querySelectorAll("img");
const imagesCount = images.length - 1;

export const navigatePictures = ({ target }) => {
  if (!["button", "img"].some((tagName) => target.matches(tagName))) return;
  const step = +target.dataset.step;
  current += step;
  current = current > imagesCount ? 0 : current < 0 ? imagesCount : current;
  showCurrentImage();
};

export const showCurrentImage = () => {
  if (!mainImagePreview) return;
  const image = images[current];
  const link = image.src.replace("-thumbnail", "");
  const altTxt = image.alt;
  mainImagePreview.src = link;
  mainImagePreview.alt = altTxt;
};

export const setCurrentImage = ({ target }) => {
  if (!["button", "img"].some((tagName) => target.matches(tagName))) return;
};
