import calculateShares from "./calculate-shares.mjs";
import checkPeople from "./check-people.mjs";
import data, { saveData } from "./data.mjs";
import { bill, tipAmount } from "./elements.mjs";
import showCurrentRate, { getCurrentRate } from "./show-current-rate.mjs";

export default function splitBill({ target }) {
  if (!target.matches("input") && !target.matches("button")) return;
  saveData(target);
  showCurrentRate(target);
  if (!checkPeople(data)) return;
  calculateShares(data);
}
