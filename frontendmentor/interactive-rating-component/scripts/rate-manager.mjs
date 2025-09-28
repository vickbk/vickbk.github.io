import { rating, ratingButtons, results, score } from "./elements.mjs";

export const rateManager = (() => {
  let rate;
  return {
    getRate() {
      return rate;
    },
    setRate(value) {
      rate = value;
    },
    onRateChange({ target }) {
      if (!target.matches("button")) return;
      rateManager.setCurrentSelected(target);
      rateManager.setRate(target.dataset.value);
    },
    setCurrentSelected(current) {
      ratingButtons.forEach((button) => button?.classList.remove("active"));
      current.classList.add("active");
    },
    onSubmit() {
      if (!!score) score.innerText = rateManager.getRate();
      rating?.classList.add("hide");
      results?.classList.remove("hide");
    },
  };
})();
