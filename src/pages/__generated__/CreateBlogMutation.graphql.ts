/**
 * @generated SignedSource<<eee2020f6a3c758a7922e227a605277d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BlogMutationInput = {
  id?: string | null;
  blogAccountId?: string | null;
  title?: string | null;
  description?: string | null;
  tags?: ReadonlyArray<string | null> | null;
  published?: boolean | null;
  archived?: boolean | null;
  references?: any | null;
  sectionOrder?: any | null;
  category?: string | null;
  clientMutationId?: string | null;
};
export type CreateBlogMutation$variables = {
  input: BlogMutationInput;
};
export type CreateBlogMutation$data = {
  readonly blog: {
    readonly success: boolean | null;
    readonly error: string | null;
    readonly blog: {
      readonly id: string;
      readonly title: string;
      readonly description: string;
      readonly tags: ReadonlyArray<string> | null;
      readonly references: any | null;
      readonly author: {
        readonly id: string;
        readonly name: string | null;
      };
      readonly sectionOrder: any | null;
      readonly createdAt: any | null;
      readonly lastUpdated: any | null;
      readonly category: string | null;
      readonly avrRating: number | null;
      readonly icon: string | null;
      readonly cover: string | null;
      readonly sections: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly title: string;
            readonly cover: string | null;
            readonly content: string;
            readonly mediaLinks: any | null;
            readonly video: string | null;
          } | null;
        } | null>;
      } | null;
    } | null;
  } | null;
};
export type CreateBlogMutation = {
  variables: CreateBlogMutation$variables;
  response: CreateBlogMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cover",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "BlogMutationPayload",
    "kind": "LinkedField",
    "name": "blog",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogType",
        "kind": "LinkedField",
        "name": "blog",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
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
            "name": "tags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "references",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogAccountType",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sectionOrder",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastUpdated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avrRating",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "icon",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogSectionTypeConnection",
            "kind": "LinkedField",
            "name": "sections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogSectionTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BlogSectionType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mediaLinks",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "video",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateBlogMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateBlogMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "28d43f6506584a9f0cb5b1e6a9510001",
    "id": null,
    "metadata": {},
    "name": "CreateBlogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateBlogMutation(\n  $input: BlogMutationInput!\n) {\n  blog(input: $input) {\n    success\n    error\n    blog {\n      id\n      title\n      description\n      tags\n      references\n      author {\n        id\n        name\n      }\n      sectionOrder\n      createdAt\n      lastUpdated\n      category\n      avrRating\n      icon\n      cover\n      sections {\n        edges {\n          node {\n            id\n            title\n            cover\n            content\n            mediaLinks\n            video\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e21fa95f57f7408d0d7c85baabb6f96e";

export default node;
