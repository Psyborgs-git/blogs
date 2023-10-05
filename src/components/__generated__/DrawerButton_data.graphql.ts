/**
 * @generated SignedSource<<40425d6b799d02b5aaf2744cb6a7607d>>
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
  readonly category: string | null;
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
      "name": "category",
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

(node as any).hash = "b319e34dc62c3bbaf4a3965135b3ed4d";

export default node;
