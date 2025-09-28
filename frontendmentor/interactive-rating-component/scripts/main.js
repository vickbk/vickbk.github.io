import { raters } from "./elements.mjs";
import { rateManager } from "./rate-manager.mjs";

raters?.addEventListener("click", rateManager.onRateChange);
submit?.addEventListener("click", rateManager.onSubmit);
