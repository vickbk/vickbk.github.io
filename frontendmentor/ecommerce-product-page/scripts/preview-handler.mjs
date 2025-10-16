import {
  mainImagePreview,
  mainImageView,
  previewImagesHolder,
  viewImagesHolder,
} from "./elements.mjs";

let current = 0;
const [images, viewImages] = [previewImagesHolder, viewImagesHolder].map(
  (element) => element?.querySelectorAll("img")
);

const imagesCount = images.length - 1;

let diapromaHolder;

export const navigatePictures = ({ target }) => {
  const button = target.closest("button");
  if (!button) return;
  const step = +button.dataset.step;
  showNextImage(step);
};

export const showCurrentImage = () => {
  if (!mainImagePreview) return;
  const image = images[current];
  const link = image.src.replace("-thumbnail", "");
  const altTxt = image.alt;
  [mainImagePreview, mainImageView].forEach((element) => {
    element.classList.add("fade-out");
    setTimeout(() => {
      element.src = link;
      element.alt = altTxt;
    }, 50);
    setTimeout(() => {
      element.classList.remove("fade-out");
    }, 300);
  });
  [images, viewImages].forEach((chosen) => setActiveThumbnail(chosen));
  if (diapromaHolder) clearTimeout(diapromaHolder);
  diapromaHolder = setTimeout(showNextImage, 10000);
};

export const setCurrentImage = ({ target }) => {
  if (!["button", "img"].some((tagName) => target.matches(tagName))) return;
  const image = target.matches("img") ? target : target.firstElementChild;

  current = [...images].indexOf(image);
  if (current === -1) current = [...viewImages].indexOf(image);
  showCurrentImage();
};

const setActiveThumbnail = (images) => {
  const previousActive = [...images].find((img) =>
    img.classList.contains("active")
  );
  previousActive?.classList.remove("active");
  images[current]?.classList.add("active");
};

const showNextImage = (step = 1) => {
  current += step;
  current = current > imagesCount ? 0 : current < 0 ? imagesCount : current;
  showCurrentImage();
};
