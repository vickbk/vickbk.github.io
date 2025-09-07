import { initData, resetData } from "./data.mjs";
import { bill, custom, numPeople, resetBtn, tipSetter } from "./elements.mjs";
import splitBill from "./split-bill.mjs";

[bill, custom, numPeople].forEach((element) =>
  element?.addEventListener("keyup", splitBill)
);
tipSetter?.addEventListener("click", splitBill);

resetBtn?.addEventListener("click", resetData);

initData();
