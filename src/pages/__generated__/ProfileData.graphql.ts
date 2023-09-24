/**
 * @generated SignedSource<<ecd1562ee658755e1c11548309f4aacd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileData$data = {
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
  readonly position: string | null;
  readonly availabilityStatus: string | null;
  readonly reviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"Review_data">;
      } | null;
    } | null>;
  } | null;
  readonly " $fragmentType": "ProfileData";
};
export type ProfileData$key = {
  readonly " $data"?: ProfileData$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileData",
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
      "name": "seoTags",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isVerified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verifiedEmail",
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
      "name": "cover",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "icon",
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
      "name": "numOfReviews",
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
      "name": "position",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availabilityStatus",
      "storageKey": null
    },
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
  "type": "BlogAccountType",
  "abstractKey": null
};

(node as any).hash = "b6aca863eeebb06df5df1d793cb3dade";

export default node;
