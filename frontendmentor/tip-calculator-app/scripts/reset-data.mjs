import data from "./data.mjs";
import { bill, custom, numPeople, resetBtn, tipSetter } from "./elements.mjs";

export function setReset(status = true) {
  data.reset = status;
  resetBtn?.[status ? "setAttribute" : "removeAttribute"]("disabled", true);
}
