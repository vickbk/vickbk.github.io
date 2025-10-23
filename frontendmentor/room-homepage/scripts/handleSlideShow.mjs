import { slideCaptions, slideShow } from "./elements.mjs";

// listen to clicks on slide navigators
export const navigateSlideShow = ({ target }) => {
  const button = target.closest("button");
  if (!button) return;
  // set current relative to the clicked button
  // back button will have navigate value of -1
  // next button will have navigate value of 1
  setCurrent(button.dataset.navigate);
};

export const { setCurrent, getCurrent, showCurrent, keepSlideShow } = (() => {
  let current = 0,
    onGoing = 0;
  return {
    // adds or removes navigate value to the current index in order to select the picture to show

    setCurrent(navigate) {
      current += +navigate;
      // count all pictures in the slide show
      const allPicturesCount =
        slideShow?.querySelectorAll(".slide-show__picture").length || 0;
      // reset current index following the current number of pictures provided
      current =
        // if current index goes beyond the number of pictures set it to 0
        current >= allPicturesCount
          ? 0
          : // if current index goes below 0 select the last picture
          current < 0
          ? allPicturesCount - 1
          : current;
      showCurrent();
    },
    getCurrent() {
      return current;
    },
    showCurrent() {
      // select all pictures
      const allPictures =
        slideShow?.querySelectorAll(".slide-show__picture") || [];
      // select all captions
      const allCaptions =
        slideCaptions?.querySelectorAll(".slide-show__caption") || [];
      // remove data-current attributes
      [...allPictures, ...allCaptions].forEach((element) =>
        element.removeAttribute("data-current")
      );
      // set the data-current attribute of the current image and the current caption to true
      [allPictures[current], allCaptions[current]].forEach((currentElement) =>
        currentElement.setAttribute("data-current", true)
      );

      keepSlideShow();
    },
    // keep the slideshow changing the picture every 10secs
    keepSlideShow() {
      clearTimeout(onGoing);
      onGoing = setTimeout(() => setCurrent(1), 10000);
    },
  };
})();

setCurrent(0);
