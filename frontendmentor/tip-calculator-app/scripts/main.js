import { bill, custom, numPeople, tipSetter } from "./elements.mjs";
import splitBill from "./split-bill.mjs";

[bill, custom, numPeople].forEach((element) =>
  element?.addEventListener("keyup", splitBill)
);

tipSetter?.addEventListener("click", splitBill);
