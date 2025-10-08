import { emailError } from "./elements.mjs";

export function onInputChange() {
  validateInput(this);
}

export function validateInput(element) {
  if (element.type === "email") setEmailError(true);
  setInputValid(element, inputHasValue(element) && checkEmail(element));
}

export const inputHasValue = (input) => input.value !== "";

export const setInputValid = (input, valid) => {
  input.setAttribute("aria-error", valid);
  const id = input.getAttribute("aria-describedby");
  id &&
    document.getElementById(id)?.classList[valid ? "add" : "remove"]("hide");
};

export const checkEmail = (element) => {
  const { nodeName, type, value } = element;
  if (nodeName !== "INPUT" || type !== "email") return true;
  const test = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  setEmailError(test);
  return test;
};

export const setEmailError = (test) => {
  emailError.innerText = !test
    ? "Please enter a valid email address"
    : "This field is required";
};
