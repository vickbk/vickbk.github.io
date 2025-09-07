import { tipAmount, totalAmount } from "./elements.mjs";

export default function displayShares(data) {
  const { tip, total } = calculateShares(data);
  [
    [tipAmount, tip],
    [totalAmount, total],
  ].forEach(([element, value]) => {
    if (element) element.innerText = value;
  });
}

function calculateShares({ tip, bill, "people-count": people }) {
  if (+people === 0) return { tip: "0.00", total: "0.00" };
  const personTip = ((bill / people) * tip) / 100;
  const personTotal = bill / people + personTip;

  return { tip: personTip.toFixed(2), total: personTotal.toFixed(2) };
}
