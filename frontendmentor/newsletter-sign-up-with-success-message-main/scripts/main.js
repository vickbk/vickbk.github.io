"use strict";

import { subscribeForm, subscribeInput, successCloser } from "./elements.mjs";
import { subscribe } from "./subscribe.mjs";
import { toggleError, toggleSuccess } from "./toggle.mjs";

subscribeForm?.addEventListener("submit", subscribe);
successCloser?.addEventListener("click", toggleSuccess);
subscribeInput?.addEventListener("keyup", toggleError);
