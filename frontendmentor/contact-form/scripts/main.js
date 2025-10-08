import { textInputs } from "./elements.mjs";
import { onInputChange } from "./handle-errors.mjs";

textInputs.forEach((input) => {
  input.addEventListener("focusout", onInputChange);
});
