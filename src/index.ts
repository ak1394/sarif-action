/*
 Copyright (c) 42Crunch Ltd. All rights reserved.
 Licensed under the GNU Affero General Public License version 3. See LICENSE.txt in the project root for license information.
*/

import * as core from "@actions/core";
import { produceSarif } from "./sarif";
import { uploadSarif } from "./upload";

(async () => {
  try {
    console.log("running the action");
    const sarif = await produceSarif();
    core.info("Uploading results to Code Scanning");
    await uploadSarif(sarif);
  } catch (ex) {
    core.setFailed(
      `Error: ${ex.message} ${(ex?.code || "", ex?.response?.body || "")}`
    );
  }
})();
