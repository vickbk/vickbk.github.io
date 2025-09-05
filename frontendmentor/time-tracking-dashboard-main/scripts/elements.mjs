// selecting DOM elements by ids and exporting them
export const [
  periodSelector,
  workElement,
  studyElement,
  exerciseElement,
  playElement,
  selfElement,
  socialElement,
] = [
  "period-selector",
  "work",
  "study",
  "exercise",
  "play",
  "self",
  "social",
].map((id) => document.getElementById(id));
