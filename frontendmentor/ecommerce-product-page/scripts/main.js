import { bodyCover, menueCloser, menueOpener } from "./elements.mjs";
import { menueHandler } from "./menue-handler.mjs";

[menueOpener, menueCloser, bodyCover].forEach((element) =>
  element?.addEventListener("click", menueHandler)
);
