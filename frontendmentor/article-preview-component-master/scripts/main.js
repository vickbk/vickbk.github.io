import { shareBtns } from "./elements.mjs";
import toggleShareBtns from "./toggle-share-btns.mjs";

shareBtns.forEach((btn) => btn.addEventListener("click", toggleShareBtns));
