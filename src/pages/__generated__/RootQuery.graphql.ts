/**
 * @generated SignedSource<<77d4a50b979cd44d992d6d104901d4ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RootQuery$variables = {};
export type RootQuery$data = {
  readonly accounts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
        readonly icon: string | null;
        readonly isActive: boolean;
      } | null;
    } | null>;
  } | null;
  readonly blogs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"BlogThumbnail_data" | "DrawerButton_data">;
      } | null;
    } | null>;
  } | null;
};
export type RootQuery = {
  variables: RootQuery$variables;
  response: RootQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "icon",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "BlogAccountTypeConnection",
  "kind": "LinkedField",
  "name": "accounts",
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isActive",
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogTypeConnection",
        "kind": "LinkedField",
        "name": "blogs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "BlogThumbnail_data"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "DrawerButton_data"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RootQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogTypeConnection",
        "kind": "LinkedField",
        "name": "blogs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cover",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "65887f4c35218683f521345a52d1b11a",
    "id": null,
    "metadata": {},
    "name": "RootQuery",
    "operationKind": "query",
    "text": "query RootQuery {\n  accounts {\n    edges {\n      node {\n        id\n        name\n        icon\n        isActive\n      }\n    }\n  }\n  blogs {\n    edges {\n      node {\n        id\n        ...BlogThumbnail_data\n        ...DrawerButton_data\n      }\n    }\n  }\n}\n\nfragment BlogThumbnail_data on BlogType {\n  id\n  title\n  description\n  cover\n  icon\n}\n\nfragment DrawerButton_data on BlogType {\n  id\n  title\n  icon\n}\n"
  }
};
})();

(node as any).hash = "42faa8eb26956b4b457be49dbc846a39";

export default node;
