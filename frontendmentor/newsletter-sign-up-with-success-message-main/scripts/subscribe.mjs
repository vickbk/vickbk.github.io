import { subscriber } from "./elements.mjs";
import { toggleSuccess } from "./toggle.mjs";
import { validateEmail } from "./validateEmail.mjs";

export function subscribe(e) {
  e.preventDefault();
  const { email } = Object.fromEntries(new FormData(this));
  if (!validateEmail(email)) return;
  if (subscriber) subscriber.innerText = email;
  toggleSuccess();
  this.reset();
}
