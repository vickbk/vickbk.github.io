import { periodSelector } from "./elements.mjs";
import periodChanger from "./periodChanger.mjs";

// adding the period changer event listener
periodSelector?.addEventListener("click", periodChanger);

periodSelector?.querySelector(".active")?.click();
