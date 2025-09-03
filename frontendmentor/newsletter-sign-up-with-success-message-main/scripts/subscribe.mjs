import { subscribeInput, subscriber } from "./elements.mjs";
import { toggleSuccess } from "./toggle.mjs";
import { validateEmail } from "./validateEmail.mjs";

export function subscribe(e) {
  e.preventDefault();
  const { email } = Object.fromEntries(new FormData(this));
  if (!validateEmail(email)) {
    subscribeInput?.classList.add("error");
    return;
  }
  if (subscriber) subscriber.innerText = email;
  toggleSuccess();
  this.reset();
  subscribeInput?.classList.remove("error");
}
