/*
 Copyright (c) 42Crunch Ltd. All rights reserved.
 Licensed under the GNU Affero General Public License version 3. See LICENSE.txt in the project root for license information.
*/

import * as url from "url";
import scanReport from "./report";

export interface Sarif {
  $schema?: string;
  version: "2.1.0";
  runs: Run[];
}

export interface Run {
  tool: {
    driver: {
      name: string;
      informationUri: string;
      rules: Rule[];
    };
  };
  artifacts: Artifact[];
  results: Result[];
}

export interface Artifact {
  location: {
    uri: url.URL;
  };
}

export interface Result {
  ruleId?: string;
  ruleIndex?: number;
  level?: "notApplicable" | "pass" | "note" | "warning" | "error" | "open";
  message?: {
    text?: string;
  };
  locations?: Location[];
}

export interface Location {
  physicalLocation?: {
    id?: number;
    artifactLocation: {
      uri: url.URL;
      index: number;
    };
    region?: Region;
  };
}

export interface Region {
  startLine?: number;
  startColumn?: number;
}

export interface Rule {
  id: string;
  shortDescription?: {
    text?: string;
  };
  helpUri?: string;
  help?: {
    text?: string;
  };
  properties?: {
    tags?: string[];
    [k: string]: any;
  };
}

function getResultLevel(
  issue: any
): "notApplicable" | "pass" | "note" | "warning" | "error" | "open" {
  return "error";
}

export async function produceSarif(): Promise<Sarif> {
  const sarifResults: Result[] = [];
  const sarifFiles = {};

  const sarifRules = {};
  const sarifRuleIndices = {};
  let nextRuleIndex = 0;
  const sarifArtifactIndices = {};
  let nextArtifactIndex = 0;

  const sarifLog: Sarif = {
    version: "2.1.0",
    $schema: "http://json.schemastore.org/sarif-2.1.0-rtm.4",
    runs: [
      {
        tool: {
          driver: {
            name: "42Crunch REST API Static Security Testing",
            informationUri: "https://42crunch.com/",
            rules: [],
          },
        },
        results: sarifResults,
        artifacts: [],
      },
    ],
  };

  for (const file of ["pixi3.yaml"]) {
    // just a single file for now
    for (const issue of scanReport.paths["/api/register"].post
      .conformanceRequestIssues) {
      const { test, outcome } = issue;
      if (typeof sarifFiles[file] === "undefined") {
        sarifArtifactIndices[file] = nextArtifactIndex++;
        sarifFiles[file] = {
          location: {
            uri: url.pathToFileURL(file),
          },
        };
      }

      const sarifRepresentation: Result = {
        level: getResultLevel(issue),
        ruleId: test.key,
        message: {
          text: test.description,
        },
        locations: [
          {
            physicalLocation: {
              artifactLocation: {
                uri: url.pathToFileURL(file),
                index: sarifArtifactIndices[file],
              },
              region: {
                startLine: 1, // FIXME use real file location
                startColumn: 1,
              },
            },
          },
        ],
      };

      sarifResults.push(sarifRepresentation);

      if (typeof sarifRules[test.key] === "undefined") {
        sarifRuleIndices[test.key] = nextRuleIndex++;

        const helpUrl = "https://support.42crunch.com";
        const helpText = "This is a sample entry for scan issue help";

        // Create a new entry in the rules dictionary.
        sarifRules[test.key] = {
          id: test.key,
          shortDescription: {
            text: test.description,
          },
          helpUri: helpUrl, //meta.docs.url,
          help: {
            text: helpText,
          },
          properties: {
            category: "Other", //meta.docs.category,
          },
        };
      }

      sarifRepresentation.ruleIndex = sarifRuleIndices[test.key];
    }
  }

  if (Object.keys(sarifFiles).length > 0) {
    sarifLog.runs[0].artifacts = [];

    Object.keys(sarifFiles).forEach(function (path) {
      sarifLog.runs[0].artifacts.push(sarifFiles[path]);
    });
  }

  if (Object.keys(sarifRules).length > 0) {
    Object.keys(sarifRules).forEach(function (ruleId) {
      let rule = sarifRules[ruleId];
      sarifLog.runs[0].tool.driver.rules.push(rule);
    });
  }

  return sarifLog;
}
