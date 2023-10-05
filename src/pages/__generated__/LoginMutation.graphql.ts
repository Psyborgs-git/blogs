/**
 * @generated SignedSource<<394cd532e403233d6195770b42c42169>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EmailAuthenticationInput = {
  email?: string | null;
  verification?: Verification | null;
  deviceName?: string | null;
  checkExisting?: boolean | null;
  clientMutationId?: string | null;
};
export type Verification = {
  id: string;
  otp: string;
};
export type LoginMutation$variables = {
  i: EmailAuthenticationInput;
};
export type LoginMutation$data = {
  readonly emailAuth: {
    readonly token: string | null;
    readonly userExists: boolean | null;
    readonly success: boolean | null;
    readonly error: string | null;
    readonly id: string | null;
  } | null;
};
export type LoginMutation = {
  variables: LoginMutation$variables;
  response: LoginMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "i"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "i"
      }
    ],
    "concreteType": "EmailAuthenticationPayload",
    "kind": "LinkedField",
    "name": "emailAuth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userExists",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "38e2e0aeb587867fb10e6f2d2b1cd7b2",
    "id": null,
    "metadata": {},
    "name": "LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginMutation(\n  $i: EmailAuthenticationInput!\n) {\n  emailAuth(input: $i) {\n    token\n    userExists\n    success\n    error\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a58ba42d9d012f13dce8a708f73a488b";

export default node;
