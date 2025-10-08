import { contactForm, textInputs } from "./elements.mjs";
import { onInputChange } from "./handle-errors.mjs";
import { handleSubmit } from "./handle-submit.mjs";

textInputs.forEach((input) => {
  input.addEventListener("focusout", onInputChange);
});

contactForm?.addEventListener("submit", handleSubmit);
