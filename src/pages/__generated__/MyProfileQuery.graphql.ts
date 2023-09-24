/**
 * @generated SignedSource<<fe8982bfdc2e4280b75d7bffef8f463b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SocialAccountsEnum = "INSTAGRAM" | "FACEBOOK" | "TWITTER" | "WHATSAPP" | "LINKEDIN" | "YOUTUBE" | "TIKTOK" | "SNAPCHAT" | "TELEGRAM" | "PINTEREST" | "REDDIT" | "TUMBLR" | "GITHUB" | "MEDIUM" | "DISCORD" | "OTHER" | "SKYPE" | "QUORA" | "TWITCH" | "SPOTIFY" | "SOUNDCLOUD" | "TINDER" | "BADOO" | "%future added value";
export type MyProfileQuery$variables = {};
export type MyProfileQuery$data = {
  readonly accounts: {
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
        readonly description: string | null;
        readonly socials: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly username: string | null;
              readonly name: string | null;
              readonly type: SocialAccountsEnum | null;
            } | null;
          } | null>;
        };
        readonly blogs: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly " $fragmentSpreads": FragmentRefs<"BlogThumbnail_data">;
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
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "SocialAccountTypeConnection",
  "kind": "LinkedField",
  "name": "socials",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SocialAccountTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SocialAccountType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            },
            (v1/*: any*/),
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
                  (v11/*: any*/),
                  (v12/*: any*/),
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
                  (v11/*: any*/),
                  (v12/*: any*/),
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
                              (v11/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/)
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
    "cacheID": "9a5e720db015cae0aa391231c58f8bb4",
    "id": null,
    "metadata": {},
    "name": "MyProfileQuery",
    "operationKind": "query",
    "text": "query MyProfileQuery {\n  accounts {\n    edges {\n      node {\n        id\n        name\n        seoTags\n        isActive\n        isVerified\n        verifiedEmail\n        category\n        cover\n        icon\n        avrRating\n        numOfReviews\n        description\n        socials {\n          edges {\n            node {\n              id\n              username\n              name\n              type\n            }\n          }\n        }\n        blogs {\n          edges {\n            node {\n              id\n              ...BlogThumbnail_data\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment BlogThumbnail_data on BlogType {\n  id\n  title\n  description\n  cover\n  icon\n}\n"
  }
};
})();

(node as any).hash = "fd1d1143e7a45abd388329d57b2a3e3e";

export default node;
