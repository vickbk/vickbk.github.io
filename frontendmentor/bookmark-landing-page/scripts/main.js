import { featuresController } from "./modules/elements.mjs";
import { handleFeatures } from "./modules/handleFeatures.mjs";

featuresController?.addEventListener("click", handleFeatures);
