"use strict";

import { subscribeForm, successCloser } from "./elements.mjs";
import { subscribe } from "./subscribe.mjs";
import { toggleSuccess } from "./toggle.mjs";

subscribeForm?.addEventListener("submit", subscribe);
successCloser?.addEventListener("click", toggleSuccess);
