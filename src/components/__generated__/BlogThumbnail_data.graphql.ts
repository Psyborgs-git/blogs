/**
 * @generated SignedSource<<1bb15e916b0de629c1fc28fb55dd3329>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogThumbnail_data$data = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly cover: string | null;
  readonly icon: string | null;
  readonly " $fragmentType": "BlogThumbnail_data";
};
export type BlogThumbnail_data$key = {
  readonly " $data"?: BlogThumbnail_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogThumbnail_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogThumbnail_data",
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "icon",
      "storageKey": null
    }
  ],
  "type": "BlogType",
  "abstractKey": null
};

(node as any).hash = "9273ad01f926308f5f2a9b56e182ff8e";

export default node;
