import { numPeople, peopleError } from "./elements.mjs";

export default function checkPeople(data, checked = false) {
  const status = data["people-count"] === 0;

  setPeopleError(status);
  if (status && !checked) {
    data["people-count"] = +numPeople?.value;
    return checkPeople(data, true);
  }
  return !status;
}
export function setPeopleError(state) {
  peopleError?.classList[!state ? "add" : "remove"]("hide");
  numPeople?.classList[state ? "add" : "remove"]("error");
}
