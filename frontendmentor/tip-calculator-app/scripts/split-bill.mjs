import checkPeople from "./check-people.mjs";

export const data = {
  bill: 0,
  tip: 0,
  "people-count": 0,
};
export default function splitBill({ target }) {
  if (!target.matches("input") && !target.matches("button")) return;
  if (target.matches("input")) setData(target.name, target.value, data);
  if (target.matches("button")) setData("tip", target.dataset.percentage, data);
  if (checkPeople(data)) console.log(data);
}

function setData(key, value, data) {
  data[key] = +value;
}
