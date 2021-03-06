/**
 * @flow
 * @relayHash 014cf2af633a37b2a9e744153a4f07c7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppFeedQueryResponse = {|
  +feed: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query AppFeedQuery {
  feed(type: NEW, limit: 5) {
    ...Feed
  }
}

fragment Feed on Entry {
  repository {
    owner {
      login
    }
    name
  }
  ...FeedEntry
}

fragment FeedEntry on Entry {
  repository {
    owner {
      login
    }
    name
    stargazers_count
  }
  postedBy {
    login
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFeedQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "NEW",
            "type": "FeedType!"
          }
        ],
        "concreteType": "Entry",
        "name": "feed",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Feed",
            "args": null
          }
        ],
        "storageKey": "feed{\"limit\":5,\"type\":\"NEW\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppFeedQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppFeedQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "NEW",
            "type": "FeedType!"
          }
        ],
        "concreteType": "Entry",
        "name": "feed",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Entry",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "name": "repository",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "login",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "stargazers_count",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "postedBy",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "login",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": "feed{\"limit\":5,\"type\":\"NEW\"}"
      }
    ]
  },
  "text": "query AppFeedQuery {\n  feed(type: NEW, limit: 5) {\n    ...Feed\n  }\n}\n\nfragment Feed on Entry {\n  repository {\n    owner {\n      login\n    }\n    name\n  }\n  ...FeedEntry\n}\n\nfragment FeedEntry on Entry {\n  repository {\n    owner {\n      login\n    }\n    name\n    stargazers_count\n  }\n  postedBy {\n    login\n  }\n}\n"
};

module.exports = batch;
