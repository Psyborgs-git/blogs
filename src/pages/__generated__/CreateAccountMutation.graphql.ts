/**
 * @generated SignedSource<<751eb93909c3839f36082c94bb4602d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SocialAccountsEnum = "INSTAGRAM" | "FACEBOOK" | "TWITTER" | "WHATSAPP" | "LINKEDIN" | "YOUTUBE" | "TIKTOK" | "SNAPCHAT" | "TELEGRAM" | "PINTEREST" | "REDDIT" | "TUMBLR" | "GITHUB" | "MEDIUM" | "DISCORD" | "OTHER" | "SKYPE" | "QUORA" | "TWITCH" | "SPOTIFY" | "SOUNDCLOUD" | "TINDER" | "BADOO" | "%future added value";
export type BlogAccountMutationInput = {
  id?: string | null;
  name?: string | null;
  seoTags?: ReadonlyArray<string | null> | null;
  isActive?: boolean | null;
  email?: string | null;
  category?: string | null;
  position?: string | null;
  socials?: ReadonlyArray<SocialMediaInput | null> | null;
  availabilityStatus?: string | null;
  clientMutationId?: string | null;
};
export type SocialMediaInput = {
  username: string;
  url?: string | null;
  type: SocialAccountsEnum;
};
export type CreateAccountMutation$variables = {
  i: BlogAccountMutationInput;
};
export type CreateAccountMutation$data = {
  readonly account: {
    readonly success: boolean | null;
    readonly error: string | null;
    readonly blogAccount: {
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
  } | null;
};
export type CreateAccountMutation = {
  variables: CreateAccountMutation$variables;
  response: CreateAccountMutation$data;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "i"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seoTags",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isActive",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "verifiedEmail",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cover",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "icon",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avrRating",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "numOfReviews",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v16 = {
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
            (v4/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            },
            (v5/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BlogAccountMutationPayload",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogAccountType",
            "kind": "LinkedField",
            "name": "blogAccount",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
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
                          (v4/*: any*/),
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BlogAccountMutationPayload",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogAccountType",
            "kind": "LinkedField",
            "name": "blogAccount",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          (v15/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/)
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
    "cacheID": "1720b90a07bf986d089824bdc8770d77",
    "id": null,
    "metadata": {},
    "name": "CreateAccountMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAccountMutation(\n  $i: BlogAccountMutationInput!\n) {\n  account(input: $i) {\n    success\n    error\n    blogAccount {\n      id\n      name\n      seoTags\n      isActive\n      isVerified\n      verifiedEmail\n      category\n      cover\n      icon\n      avrRating\n      numOfReviews\n      description\n      socials {\n        edges {\n          node {\n            id\n            username\n            name\n            type\n          }\n        }\n      }\n      blogs {\n        edges {\n          node {\n            id\n            ...BlogThumbnail_data\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment BlogThumbnail_data on BlogType {\n  id\n  title\n  description\n  cover\n  icon\n}\n"
  }
};
})();

(node as any).hash = "20f87979452c1a51fbf4e2df295a8db4";

export default node;
