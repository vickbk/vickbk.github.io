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
      const rate = rateManager.getRate();
      if (!rate) return;
      if (!!score) score.innerText = rate;
      rating?.classList.add("hide");
      results?.classList.remove("hide");
    },
  };
})();
