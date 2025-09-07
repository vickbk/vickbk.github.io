import displayShares from "./calculate-shares.mjs";
import checkPeople, { setPeopleError } from "./check-people.mjs";
import { bill, custom, numPeople, tipSetter } from "./elements.mjs";
import { setReset } from "./reset-data.mjs";
import { getCurrentRate } from "./show-current-rate.mjs";

const data = {
  bill: 0,
  tip: 0,
  "people-count": 0,
};
export default data;

export const initData = () => {
  if (data.bill === 0) setData("bill", bill.value, data);
  if (data.tip === 0) setData("tip", getCurrentRate(), data);
  if (checkPeople(data)) displayShares(data);
  setPeopleError(false);
  setReset([data.bill, data.tip, data["people-count"]].every((v) => v === 0));
};

export function saveData(target) {
  if (target.matches("input")) setData(target.name, target.value, data);
  else if (target.matches("button")) {
    setData("tip", target.dataset.percentage, data);
    custom.value = "";
  }
  setReset(false);
}

export function resetData() {
  [bill, custom, numPeople].forEach((input) =>
    input?.value ? (input.value = "") : null
  );
  tipSetter?.querySelector(".active")?.classList.remove("active");
  ["tip", "bill", "people-count"].forEach((key) => setData(key, "", data));
  displayShares(data);
  setReset(true);
  setPeopleError(false);
}

function setData(key, value, data) {
  data[key] = +value;
}
