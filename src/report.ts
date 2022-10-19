export default {
  runtimeConfiguration: {
    logLevel: "error",
    logDestination: "stdout+platform",
    maxLogFileSize: 2147483648,
    headerNameRequestId: "x-scan-request-id",
    headerNameScenarioId: "x-scan-scenario-id",
    flowrate: 10,
    timeout: 30,
    followRedirection: true,
    happyPathRetry: 1,
    happyPathOnly: false,
    maxScanTime: 3600,
    memoryLimit: 2147483648,
    memoryTimeSpan: 10,
    indexed: false,
    prettify: false,
    maxBodySizeScan: 10485760,
    maxHttpResponseSizeHappyPathReport: 0,
    maxBodySizeHappyPathReport: 8092,
    maxHttpResponseSizeTestReport: 0,
    maxBodySizeTestReport: 8092,
    errorsOnly: true,
    maxIssues: 10000,
    maxReportSize: 104857600,
  },
  scanVersion: "2.0.0",
  scanReportVersion: "3.0.0",
  commit: "",
  scanType: "OnPrem",
  summary: {
    openapiId: "",
    startDate: "2022-10-06T12:23:07.1031649Z",
    endDate: "2022-10-06T12:23:08.339218Z",
    state: "done",
    exitCode: 0,
    happyPathRequests: {
      totalApi: 3,
      estimated: 1,
      executed: 1,
      failed: 0,
    },
    operations: {
      totalApi: 8,
      estimated: 8,
      executed: 1,
    },
    conformanceTestRequests: {
      totalApi: 53,
      estimated: 53,
      executed: 53,
      expectedResponses: 40,
      unexpectedResponses: 13,
      incorrectResponses: 0,
    },
    customTestRequests: {
      estimated: 0,
      executed: 0,
      expectedResponses: 0,
      unexpectedResponses: 0,
      incorrectResponses: 0,
    },
    criticality: 3,
    issues: {
      total: 13,
      critical: 0,
      high: 0,
      medium: 6,
      low: 6,
      info: 1,
      issueTypeCounter: {
        "path-item-method-not-allowed-scan": 7,
        "schema-maxlength-scan": 1,
        "schema-minlength-scan": 1,
        "schema-pattern-scan": 1,
        "schema-required-scan": 3,
      },
    },
  },
  paths: {
    "/api/register": {
      delete: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[delete]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 0,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "expected but with non-conformant response",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "b58fe89e-913a-40c9-9cba-b0d45ff02d70",
              scenarioId: "e56aae4a-3dd6-4a37-809d-287501ea88ef",
              date: "2022-10-06T12:23:07Z",
              contentType: "",
              bodyLength: 0,
              url: "http://host.docker.internal:8090/api/register",
              curl: "curl -X 'DELETE' 'http://host.docker.internal:8090/api/register'",
            },
            response: {
              time: 2,
              httpStatusCode: 405,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZA0KRGF0ZTogVGh1LCAwNiBPY3QgMjAyMiAxMjoyMzowNyBHTVQNCkNvbnRlbnQtTGVuZ3RoOiAwDQoNCg==",
            },
          },
        ],
      },
      get: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[get]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 0,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "expected but with non-conformant response",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "a152d57e-fc9c-4bec-8506-211b5384844c",
              scenarioId: "6d5041c9-5dbb-41f1-89cc-f986cc5ffd6f",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'GET\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 1,
              httpStatusCode: 405,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZA0KRGF0ZTogVGh1LCAwNiBPY3QgMjAyMiAxMjoyMzowNyBHTVQNCkNvbnRlbnQtTGVuZ3RoOiAwDQoNCg==",
            },
          },
        ],
      },
      head: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[head]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 7,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "6bf867d2-583f-4466-bd2f-9a8f5c442b0f",
              scenarioId: "30e04a6b-9c63-4cd4-adaa-9f426230c1ef",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'HEAD\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 2,
              httpStatusCode: 400,
              contentType: "text/plain; charset=utf-8",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDAwIEJhZCBSZXF1ZXN0DQpDb25uZWN0aW9uOiBjbG9zZQ0KQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04DQoNCg==",
            },
          },
        ],
      },
      options: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[options]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 7,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "9ea7d53f-b8f8-4237-b5a6-07e8a33cd18e",
              scenarioId: "3f058566-386f-4246-8e44-84d77c2f1121",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'OPTIONS\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 1,
              httpStatusCode: 200,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgMjAwIE9LDQpEYXRlOiBUaHUsIDA2IE9jdCAyMDIyIDEyOjIzOjA3IEdNVA0KQ29udGVudC1MZW5ndGg6IDANCg0K",
            },
          },
        ],
      },
      patch: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[patch]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 0,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "expected but with non-conformant response",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "041afd1c-6996-4971-b4d9-236642b30fb3",
              scenarioId: "49cf5164-ff0e-4487-8150-cb93be7c32a7",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'PATCH\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 19,
              httpStatusCode: 405,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZA0KQ29udGVudC1MZW5ndGg6IDANCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQoNCg==",
            },
          },
        ],
      },
      post: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 46,
          estimated: 46,
          executed: 46,
          expectedResponses: 40,
          unexpectedResponses: 6,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        happyPaths: [
          {
            happyPath: {
              key: "happy.path.success",
              httpStatusExpected: ["200"],
              successIndex: 0,
            },
            outcome: {
              failureIndex: -1,
              status: "expected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 0,
            },
            request: {
              id: "9454149c-aaa2-4ba7-8834-a1cef40bada6",
              scenarioId: "1345f146-4807-44e7-a0b9-a575aec639f2",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 30,
              httpStatusCode: 200,
              contentType: "application/json",
              bodyLength: 195,
              http: "SFRUUC8xLjEgMjAwIE9LDQpDb250ZW50LUxlbmd0aDogMTk1DQpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQpTZXQtQ29va2llOiB0b2tlbj1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pYkY5amIzWm9aM28xWWkxQWIzbDNaWEI1TG5wNGNtY2lMQ0psZUhBaU9qRTJOalV3TlRreU9EZDkuOUFFd1o0ZmpGVElGUV9odW54NXJZMklXNnk1SUZ0RmUtaDFJZWxacTIwazsgRXhwaXJlcz1UaHUsIDA2IE9jdCAyMDIyIDEyOjI4OjA3IEdNVA0KDQp7Im1lc3NhZ2UiOiJUb2tlbiBpcyBhIGhlYWRlciBKV1QiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpWYzJWeUlqb2liRjlqYjNab1ozbzFZaTFBYjNsM1pYQjVMbnA0Y21jaUxDSmxlSEFpT2pFMk5qVXdOVGt5T0RkOS45QUV3WjRmakZUSUZRX2h1bng1clkySVc2eTVJRnRGZS1oMUllbFpxMjBrIn0=",
            },
          },
        ],
        conformanceRequestIssues: [
          {
            test: {
              key: "schema-required-scan",
              description:
                "The required property ‘[account_balance]’ is missing in the generated object",
              httpStatusExpected: ["400"],
              owaspMapping: 8,
              jsonPointer: "/components/schemas/UserRegistrationData",
              stackTrace: "/components/schemas/UserRegistrationData",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "22185ca6-212e-4b73-8344-20073685fd1b",
              scenarioId: "11c60a95-5ae3-454a-af1c-d24bb5e4071f",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 81,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 1,
              httpStatusCode: 409,
              contentType: "application/json",
              bodyLength: 37,
              http: "SFRUUC8xLjEgNDA5IENvbmZsaWN0DQpDb250ZW50LUxlbmd0aDogMzcNCkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbg0KRGF0ZTogVGh1LCAwNiBPY3QgMjAyMiAxMjoyMzowNyBHTVQNCg0KeyJtZXNzYWdlIjoidXNlciBhbHJlYWR5IHJlZ2lzdGVyZWQifQ==",
            },
          },
          {
            test: {
              key: "schema-required-scan",
              description:
                "The required property ‘[is_admin]’ is missing in the generated object",
              httpStatusExpected: ["400"],
              owaspMapping: 8,
              jsonPointer: "/components/schemas/UserRegistrationData",
              stackTrace: "/components/schemas/UserRegistrationData",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "181072f5-df29-49a2-820d-65d46ad5190e",
              scenarioId: "507fc027-9b08-46ea-8539-cacba9dc1d3a",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 87,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 1,
              httpStatusCode: 409,
              contentType: "application/json",
              bodyLength: 37,
              http: "SFRUUC8xLjEgNDA5IENvbmZsaWN0DQpDb250ZW50LUxlbmd0aDogMzcNCkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbg0KRGF0ZTogVGh1LCAwNiBPY3QgMjAyMiAxMjoyMzowNyBHTVQNCg0KeyJtZXNzYWdlIjoidXNlciBhbHJlYWR5IHJlZ2lzdGVyZWQifQ==",
            },
          },
          {
            test: {
              key: "schema-required-scan",
              description:
                "The required property ‘[user]’ is missing in the generated object",
              httpStatusExpected: ["400"],
              owaspMapping: 8,
              jsonPointer: "/components/schemas/UserRegistrationData",
              stackTrace: "/components/schemas/UserRegistrationData",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "b59ee907-9bec-40a1-8b65-03daa8ef6b21",
              scenarioId: "122cc8a3-0ea4-4096-9e7c-6e196e71ede0",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 70,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 2,
              httpStatusCode: 200,
              contentType: "application/json",
              bodyLength: 165,
              http: "SFRUUC8xLjEgMjAwIE9LDQpDb250ZW50LUxlbmd0aDogMTY1DQpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQpTZXQtQ29va2llOiB0b2tlbj1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pSWl3aVpYaHdJam94TmpZMU1EVTVNamczZlEuNTdKWl9Cb0ZReXkweTJjTmFGUkh5Tk45ZHJRV19GQmJyX2RaS19UNHhoNDsgRXhwaXJlcz1UaHUsIDA2IE9jdCAyMDIyIDEyOjI4OjA3IEdNVA0KDQp7Im1lc3NhZ2UiOiJUb2tlbiBpcyBhIGhlYWRlciBKV1QiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpWYzJWeUlqb2lJaXdpWlhod0lqb3hOalkxTURVNU1qZzNmUS41N0paX0JvRlF5eTB5MmNOYUZSSHlOTjlkclFXX0ZCYnJfZFpLX1Q0eGg0In0=",
            },
          },
          {
            test: {
              key: "schema-pattern-scan",
              description:
                "The generated value does not follow the property pattern for strings",
              httpStatusExpected: ["400"],
              owaspMapping: 8,
              jsonPointer:
                "/components/schemas/UserRegistrationData/properties/user",
              stackTrace:
                "/components/schemas/UserRegistrationData/properties/user",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 2,
            },
            request: {
              id: "98820986-e6e7-4cf0-9823-0c34f7715537",
              scenarioId: "31cf18f7-d567-4e3e-9ce5-195dacf7faf7",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 84,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"z~A-"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 1,
              httpStatusCode: 200,
              contentType: "application/json",
              bodyLength: 170,
              http: "SFRUUC8xLjEgMjAwIE9LDQpDb250ZW50LUxlbmd0aDogMTcwDQpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQpTZXQtQ29va2llOiB0b2tlbj1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pZW41aExTSXNJbVY0Y0NJNk1UWTJOVEExT1RJNE4zMC5JdGdOZ1QyLUNxMFFJZlNjSkg2aTkxX0hpb3J0UmhzRnBVV3FZLVBISTJnOyBFeHBpcmVzPVRodSwgMDYgT2N0IDIwMjIgMTI6Mjg6MDcgR01UDQoNCnsibWVzc2FnZSI6IlRva2VuIGlzIGEgaGVhZGVyIEpXVCIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SlZjMlZ5SWpvaWVuNWhMU0lzSW1WNGNDSTZNVFkyTlRBMU9USTROMzAuSXRnTmdUMi1DcTBRSWZTY0pINmk5MV9IaW9ydFJoc0ZwVVdxWS1QSEkyZyJ9",
            },
          },
          {
            test: {
              key: "schema-minlength-scan",
              description:
                "The generated value does not follow the property minLength for strings",
              httpStatusExpected: ["400"],
              owaspMapping: 0,
              jsonPointer:
                "/components/schemas/UserRegistrationData/properties/user",
              stackTrace:
                "/components/schemas/UserRegistrationData/properties/user",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 1,
            },
            request: {
              id: "421a37ca-683f-4f8b-9e92-d37a4a6178c6",
              scenarioId: "e7b04f2b-e2bf-42ea-a71b-54eadaae056f",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 83,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"dCx"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 2,
              httpStatusCode: 200,
              contentType: "application/json",
              bodyLength: 169,
              http: "SFRUUC8xLjEgMjAwIE9LDQpDb250ZW50LUxlbmd0aDogMTY5DQpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQpTZXQtQ29va2llOiB0b2tlbj1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pWkdONElpd2laWGh3SWpveE5qWTFNRFU1TWpnM2ZRLjFTbmVuc2tROHU0cTk2Ui10S3R5SURmVjQyYXducE9ycFk5cm5STFF6U0U7IEV4cGlyZXM9VGh1LCAwNiBPY3QgMjAyMiAxMjoyODowNyBHTVQNCg0KeyJtZXNzYWdlIjoiVG9rZW4gaXMgYSBoZWFkZXIgSldUIiwidG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pWkdONElpd2laWGh3SWpveE5qWTFNRFU1TWpnM2ZRLjFTbmVuc2tROHU0cTk2Ui10S3R5SURmVjQyYXducE9ycFk5cm5STFF6U0UifQ==",
            },
          },
          {
            test: {
              key: "schema-maxlength-scan",
              description:
                "The generated value does not follow the property maxLength for strings",
              httpStatusExpected: ["400"],
              owaspMapping: 8,
              jsonPointer:
                "/components/schemas/UserRegistrationData/properties/user",
              stackTrace:
                "/components/schemas/UserRegistrationData/properties/user",
            },
            outcome: {
              failureIndex: 0,
              status: "unexpected",
              apiResponseAnalysis: null,
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "78a90906-1128-445f-ab2a-06bd784cf092",
              scenarioId: "f78a88e6-642a-41b4-bd23-8025b2196b2c",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 131,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'POST\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"mM8BIabKERsUhPNmMmdf2eSJyYtqwcFiUILzXv2fcNIrWO7sToF"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 2,
              httpStatusCode: 200,
              contentType: "application/json",
              bodyLength: 233,
              http: "SFRUUC8xLjEgMjAwIE9LDQpDb250ZW50LUxlbmd0aDogMjMzDQpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQpTZXQtQ29va2llOiB0b2tlbj1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKVmMyVnlJam9pYlcwNFltbGhZbXRsY25OMWFIQnViVzF0WkdZeVpYTnFlWGwwY1hkalptbDFhV3g2ZUhZeVptTnVhWEozYnpkemRHOW1JaXdpWlhod0lqb3hOalkxTURVNU1qZzNmUS5LN3pxd0FtbDVvajNtZzBuMmZHckhNNHFCbVF4cVFkbjFQaExmTDVTWWVBOyBFeHBpcmVzPVRodSwgMDYgT2N0IDIwMjIgMTI6Mjg6MDcgR01UDQoNCnsibWVzc2FnZSI6IlRva2VuIGlzIGEgaGVhZGVyIEpXVCIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SlZjMlZ5SWpvaWJXMDRZbWxoWW10bGNuTjFhSEJ1YlcxdFpHWXlaWE5xZVhsMGNYZGpabWwxYVd4NmVIWXlabU51YVhKM2J6ZHpkRzltSWl3aVpYaHdJam94TmpZMU1EVTVNamczZlEuSzd6cXdBbWw1b2ozbWcwbjJmR3JITTRxQm1ReHFRZG4xUGhMZkw1U1llQSJ9",
            },
          },
        ],
      },
      put: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[put]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 0,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "expected but with non-conformant response",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "2b6cf85b-fd30-4410-b4a2-022978bbe49c",
              scenarioId: "c388e9f5-29ce-46c7-8254-c3e09eaccd18",
              date: "2022-10-06T12:23:07Z",
              contentType: "application/json",
              bodyLength: 103,
              url: "http://host.docker.internal:8090/api/register",
              curl: 'curl -X \'PUT\' -d \'{"account_balance":551,"is_admin":true,"name":"_iRmT","pass":"OIIMUU","user":"l_cOvhgZ5b-@oYWePy.Zxrg"}\' -H \'Content-Type: application/json\' \'http://host.docker.internal:8090/api/register\'',
            },
            response: {
              time: 2,
              httpStatusCode: 405,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZA0KQ29udGVudC1MZW5ndGg6IDANCkRhdGU6IFRodSwgMDYgT2N0IDIwMjIgMTI6MjM6MDcgR01UDQoNCg==",
            },
          },
        ],
      },
      trace: {
        checked: true,
        conformanceTestRequests: {
          totalApi: 1,
          estimated: 1,
          executed: 1,
          expectedResponses: 0,
          unexpectedResponses: 1,
          incorrectResponses: 0,
        },
        customTestRequests: {
          estimated: 0,
          executed: 0,
          expectedResponses: 0,
          unexpectedResponses: 0,
          incorrectResponses: 0,
        },
        conformanceRequestIssues: [
          {
            test: {
              key: "path-item-method-not-allowed-scan",
              description:
                "The request is generated with the verb ‘[trace]’ that is not defined in the OpenAPI definition of the API",
              httpStatusExpected: ["405"],
              owaspMapping: 0,
              jsonPointer: "/paths/~1api~1register",
              stackTrace: "/paths/~1api~1register",
            },
            outcome: {
              failureIndex: 0,
              status: "expected but with non-conformant response",
              apiResponseAnalysis: [
                {
                  responseKey: "response-body-contenttype-scan",
                  responseDescription:
                    "The content type ‘’ in the received response is not defined in the OpenAPI definition of the API",
                },
              ],
              excessiveDataExposure: false,
              criticality: 3,
            },
            request: {
              id: "618d686a-9c75-4f23-91fb-8c867335dd0e",
              scenarioId: "78381fdb-7595-4810-8d08-d652bed6f1ca",
              date: "2022-10-06T12:23:07Z",
              contentType: "",
              bodyLength: 0,
              url: "http://host.docker.internal:8090/api/register",
              curl: "curl -X 'TRACE' 'http://host.docker.internal:8090/api/register'",
            },
            response: {
              time: 2,
              httpStatusCode: 405,
              contentType: "",
              bodyLength: 0,
              http: "SFRUUC8xLjEgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZA0KRGF0ZTogVGh1LCAwNiBPY3QgMjAyMiAxMjoyMzowNyBHTVQNCkNvbnRlbnQtTGVuZ3RoOiAwDQoNCg==",
            },
          },
        ],
      },
    },
  },
};
