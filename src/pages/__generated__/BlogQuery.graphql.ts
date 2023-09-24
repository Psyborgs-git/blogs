/**
 * @generated SignedSource<<84044cb0846a3c342b16a6240f5e4696>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BlogQuery$variables = {
  id: string;
};
export type BlogQuery$data = {
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
};
export type BlogQuery = {
  variables: BlogQuery$variables;
  response: BlogQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlogQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "6d785dcabb0460d9e753e2bf062a5d4b",
    "id": null,
    "metadata": {},
    "name": "BlogQuery",
    "operationKind": "query",
    "text": "query BlogQuery(\n  $id: ID!\n) {\n  blog(id: $id) {\n    id\n    title\n    description\n    tags\n    references\n    author {\n      id\n      name\n    }\n    sectionOrder\n    createdAt\n    lastUpdated\n    category\n    avrRating\n    icon\n    cover\n    sections {\n      edges {\n        node {\n          id\n          title\n          cover\n          content\n          mediaLinks\n          video\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff204920c5af131d95e91243d36cdade";

export default node;
