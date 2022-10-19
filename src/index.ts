/*
 Copyright (c) 42Crunch Ltd. All rights reserved.
 Licensed under the GNU Affero General Public License version 3. See LICENSE.txt in the project root for license information.
*/

import { resolve } from "path";
import * as core from "@actions/core";
import { audit } from "@xliic/cicd-core-node";
import { produceSarif } from "./sarif";
import { uploadSarif } from "./upload";
import {
  Logger,
  Reference,
  SharingType,
} from "@xliic/cicd-core-node/lib/types";

function logger(levelName: string): Logger {
  const levels = {
    FATAL: 5,
    ERROR: 4,
    WARN: 3,
    INFO: 2,
    DEBUG: 1,
  };

  const level = levels[levelName.toUpperCase()] ?? levels.INFO;

  return {
    debug: (message: string) => {
      if (levels.DEBUG >= level) {
        console.log(message);
      }
    },
    info: (message: string) => {
      if (levels.INFO >= level) {
        console.log(message);
      }
    },
    warning: (message: string) => {
      if (levels.WARN >= level) {
        console.log(message);
      }
    },
    error: (message: string) => {
      if (levels.ERROR >= level) {
        console.log(message);
      }
    },
    fatal: (message: string) => {
      if (levels.FATAL >= level) {
        console.log(message);
      }
    },
  };
}

function getInputValue(input: string, options: any, defaultValue: any): any {
  const value = core.getInput(input, { required: false });
  if (typeof value === "undefined") {
    return defaultValue;
  }

  if (options.hasOwnProperty(value)) {
    return options[value];
  }

  console.log(
    `Unexpected value for input "${input}" using default value instead`
  );

  return defaultValue;
}

(async () => {
  try {
    console.log("running the action");
    /*
    if (uploadToCodeScanning !== "false") {
      core.info("Uploading results to Code Scanning");
      const sarif = await produceSarif(result.files);
      await uploadSarif(sarif);
    }*/
  } catch (ex) {
    core.setFailed(
      `Error: ${ex.message} ${(ex?.code || "", ex?.response?.body || "")}`
    );
  }
})();
