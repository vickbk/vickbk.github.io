import { otherInputs, successToast, textInputs } from "./elements.mjs";
import { validateInput } from "./handle-errors.mjs";

export function handleSubmit(e) {
  e.preventDefault();
  const noError = [...textInputs, ...otherInputs]
    .map((input) => validateInput(input))
    .every((status) => status);
  if (noError) {
    this.reset();
    handleSuccessToast(true);
  }
}

export const handleSuccessToast = (show = false) => {
  successToast?.classList[show ? "remove" : "add"]("hide");
  successToast?.setAttribute("aria-hidden", !show);
  if (show) {
    setTimeout(handleSuccessToast, 5000);
  }
};
