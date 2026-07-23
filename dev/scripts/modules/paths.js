"use strict";

import { dirname } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(dirname(dirname(dirname(fileURLToPath(import.meta.url)))));
export { projectRoot };