// selecting specific elements by their ids
export const [emailError, contactForm, successToast] = [
  "email-error",
  "contact-form",
  "success-toast",
].map((id) => document.getElementById(id));

// selecting multiple elements using query selectors
export const [textInputs, otherInputs] = [
  "input[type=text],input[type=email],textarea",
  "[type=radio],[type=checkbox]",
].map((selector) => document.querySelectorAll(selector));
