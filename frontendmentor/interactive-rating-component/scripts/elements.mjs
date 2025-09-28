export const [rating, results, submit, raters, score] = [
  "rating",
  "results",
  "submit",
  "raters",
  "score",
].map((id) => document.getElementById(id));

export const ratingButtons = raters?.querySelectorAll("button");
