/**
 * @generated SignedSource<<550f6bee883421f14d498902ed6b8cb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CreateBlogQuery$variables = {};
export type CreateBlogQuery$data = {
  readonly myAccounts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
        readonly icon: string | null;
      } | null;
    } | null>;
  } | null;
};
export type CreateBlogQuery = {
  variables: CreateBlogQuery$variables;
  response: CreateBlogQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BlogAccountTypeConnection",
    "kind": "LinkedField",
    "name": "myAccounts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogAccountTypeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogAccountType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "icon",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateBlogQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CreateBlogQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7832de88d6c2ca5f2fc218eefae48ed",
    "id": null,
    "metadata": {},
    "name": "CreateBlogQuery",
    "operationKind": "query",
    "text": "query CreateBlogQuery {\n  myAccounts {\n    edges {\n      node {\n        id\n        name\n        icon\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "79726a00dff06226f6159fdf80317f56";

export default node;
