/**
 * @generated SignedSource<<57068ee153b96c6bdc041d56d1950e3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfileQuery$variables = {};
export type MyProfileQuery$data = {
  readonly myAccounts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
        readonly seoTags: ReadonlyArray<string> | null;
        readonly isActive: boolean;
        readonly isVerified: boolean;
        readonly verifiedEmail: string | null;
        readonly category: string | null;
        readonly cover: string | null;
        readonly icon: string | null;
        readonly avrRating: number | null;
        readonly numOfReviews: number | null;
        readonly reviews: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly " $fragmentSpreads": FragmentRefs<"Review_data">;
            } | null;
          } | null>;
        } | null;
      } | null;
    } | null>;
  } | null;
};
export type MyProfileQuery = {
  variables: MyProfileQuery$variables;
  response: MyProfileQuery$data;
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
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seoTags",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isActive",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "verifiedEmail",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cover",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "icon",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avrRating",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "numOfReviews",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfileQuery",
    "selections": [
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ReviewTypeConnection",
                    "kind": "LinkedField",
                    "name": "reviews",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ReviewTypeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ReviewType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "Review_data"
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
    "name": "MyProfileQuery",
    "selections": [
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ReviewTypeConnection",
                    "kind": "LinkedField",
                    "name": "reviews",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ReviewTypeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ReviewType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "comment",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "rating",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "timestamp",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ContentTypeConnection",
                                "kind": "LinkedField",
                                "name": "media",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ContentTypeEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ContentType",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v0/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "url",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "type",
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
    "cacheID": "d760139e1fa27466b8bb155d7045b834",
    "id": null,
    "metadata": {},
    "name": "MyProfileQuery",
    "operationKind": "query",
    "text": "query MyProfileQuery {\n  myAccounts {\n    edges {\n      node {\n        id\n        name\n        seoTags\n        isActive\n        isVerified\n        verifiedEmail\n        category\n        cover\n        icon\n        avrRating\n        numOfReviews\n        reviews {\n          edges {\n            node {\n              ...Review_data\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Review_data on ReviewType {\n  id\n  comment\n  rating\n  timestamp\n  media {\n    edges {\n      node {\n        id\n        url\n        type\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4e517b1680e4346d0c0369363e1300d";

export default node;
