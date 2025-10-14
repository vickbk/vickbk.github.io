import {
  mainImagePreview,
  previewContainer,
  previewImagesHolder,
} from "./elements.mjs";

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
  setActiveThumbnail();
};

export const setCurrentImage = ({ target }) => {
  if (!["button", "img"].some((tagName) => target.matches(tagName))) return;
  const image = target.matches("img") ? target : target.firstElementChild;

  current = [...images].indexOf(image);
  showCurrentImage();
};

const setActiveThumbnail = () => {
  const previousActive = [...images].find((img) =>
    img.classList.contains("active")
  );
  previousActive?.classList.remove("active");
  images[current]?.classList.add("active");
};
