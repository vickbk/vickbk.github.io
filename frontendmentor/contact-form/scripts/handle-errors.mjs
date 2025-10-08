import { emailError } from "./elements.mjs";
import { handleSuccessToast } from "./handle-submit.mjs";

export function onInputChange() {
  validateInput(this);
}

export function validateInput(element) {
  if (element.type === "email") setEmailError(true);
  const isValid = inputHasValue(element) && checkEmail(element);
  setInputValid(element, isValid);
  return isValid;
}

export const inputHasValue = (input) => {
  const { type, value } = input;
  if (!["radio", "checkbox"].includes(type)) return value !== "";
  return inputHasChecked(input);
};

export const inputHasChecked = (input) => {
  const { name, type } = input;
  if (!["radio", "checkbox"].includes(type)) return false;
  const allRelatedInputs = document.querySelectorAll(`[name=${name}]`);
  return [...allRelatedInputs].some((someInput) => someInput.checked);
};

export const setInputValid = (input, valid) => {
  const id = input.getAttribute("aria-describedby");
  const errorElement = id && document.getElementById(id);
  errorElement?.classList[valid ? "add" : "remove"]("hide");
  errorElement?.setAttribute("aria-hidden", valid);
  input.setAttribute("aria-invalid", !valid);
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
