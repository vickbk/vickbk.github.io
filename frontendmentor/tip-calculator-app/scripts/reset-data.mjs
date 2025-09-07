import data from "./data.mjs";
import { resetBtn } from "./elements.mjs";

export function setReset(status = true) {
  data.reset = status;
  resetBtn?.[status ? "setAttribute" : "removeAttribute"]("disabled", true);
}
