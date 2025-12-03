export const [main, descElement] = ["main", "meta[type=description]"].map(
  (selector) => document.querySelector(selector)
);
