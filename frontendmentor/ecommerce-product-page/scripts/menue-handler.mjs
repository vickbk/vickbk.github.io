import { bodyCover, navbar } from "./elements.mjs";

let closed = true;
export const menueHandler = () => {
  [
    [navbar, "sm-hide"],
    [bodyCover, "hide"],
  ].forEach(([element, className]) =>
    element.classList[closed ? "remove" : "add"](className)
  );

  closed = !closed;
};
