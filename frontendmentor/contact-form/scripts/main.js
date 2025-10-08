import { contactForm, otherInputs, textInputs } from "./elements.mjs";
import { onInputChange } from "./handle-errors.mjs";
import { handleSubmit } from "./handle-submit.mjs";

textInputs.forEach((input) => {
  input?.addEventListener("focusout", onInputChange);
});

otherInputs?.forEach((input) =>
  input?.addEventListener("change", onInputChange)
);

contactForm?.addEventListener("submit", handleSubmit);
