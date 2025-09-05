import { dataObject } from "./data.mjs";
import {
  exerciseElement,
  playElement,
  selfElement,
  socialElement,
  studyElement,
  workElement,
} from "./elements.mjs";

// define the different prefixes to display on change
const prefixes = {
  daily: "Yesterday",
  weekly: "Last week",
  monthly: "Last month",
};

// display the data on different elements
export default function displayData(selector) {
  // determine the current prefix to use
  const prefix = prefixes[selector];

  // adding the elements to an array to loop through to avoid repetition
  // The array is taking a touplet to identify the current data to use [identifier, element]
  [
    ["work", workElement],
    ["play", playElement],
    ["study", studyElement],
    ["exercise", exerciseElement],
    ["social", socialElement],
    ["self", selfElement],
  ].forEach(([identifier, element]) => {
    // destructuring the data for better usage, the identifier is used to select the element data
    // The dataObject holds the data {work: {...}, play: {...},...}
    // Eg. dataObject[work] will destructure the data for the work element only
    const {
      title,
      // destructuring the time frame using the selector (daily/weekly/monthly)
      timeframes: {
        // extracting the current and previous values
        [selector]: { current, previous },
      },
    } = dataObject[identifier];

    // selecting the different sections to update
    const [titleHolder, mainHolder, previousHolder] = [
      ".data__title-text",
      ".data__content",
      ".data__previous",
    ].map((query) => element?.querySelector(query));
    if (titleHolder) titleHolder.innerText = title;
    if (mainHolder) mainHolder.innerText = `${current}Hrs`;
    if (previousHolder) previousHolder.innerText = `${prefix} - ${previous}Hrs`;
  });
}
