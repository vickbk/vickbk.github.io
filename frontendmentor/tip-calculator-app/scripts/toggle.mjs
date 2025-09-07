export const toggle = (...elements) => {
  elements.map((element) => element?.classList.toggle("hide"));
};

export function toggleError() {
  this.classList.remove("error");
}
