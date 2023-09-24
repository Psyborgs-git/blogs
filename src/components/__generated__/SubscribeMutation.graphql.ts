/**
 * @generated SignedSource<<6f01daec97bc24f0bf081abf4ad0027d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SubscriberMutationInput = {
  name: string;
  email?: string | null;
  mobile?: MobileNumberInput | null;
  node: string;
  clientMutationId?: string | null;
};
export type MobileNumberInput = {
  countryCode?: string | null;
  number: string;
};
export type SubscribeMutation$variables = {
  input: SubscriberMutationInput;
};
export type SubscribeMutation$data = {
  readonly subscribe: {
    readonly success: boolean | null;
    readonly error: string | null;
  } | null;
};
export type SubscribeMutation = {
  variables: SubscribeMutation$variables;
  response: SubscribeMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SubscriberMutationPayload",
    "kind": "LinkedField",
    "name": "subscribe",
    "plural": false,
    "selections": [
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
    "name": "SubscribeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubscribeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4b56bed1dc2f916d36453c1b4a55e3dc",
    "id": null,
    "metadata": {},
    "name": "SubscribeMutation",
    "operationKind": "mutation",
    "text": "mutation SubscribeMutation(\n  $input: SubscriberMutationInput!\n) {\n  subscribe(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ab0a136af4cbde9395d3218992c0387";

export default node;
