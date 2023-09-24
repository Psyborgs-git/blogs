/**
 * @generated SignedSource<<b12e6d506058e9d7c15edd55af867555>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DrawerButton_data$data = {
  readonly id: string;
  readonly title: string;
  readonly icon: string | null;
  readonly " $fragmentType": "DrawerButton_data";
};
export type DrawerButton_data$key = {
  readonly " $data"?: DrawerButton_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"DrawerButton_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DrawerButton_data",
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
      "name": "icon",
      "storageKey": null
    }
  ],
  "type": "BlogType",
  "abstractKey": null
};

(node as any).hash = "e9213683851890f965fe6628872196cb";

export default node;
