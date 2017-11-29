// Accommodates for the lack of proper multiple signature support in CFDocs

import { MyMap } from "../collections";

export interface MinMultiSigs extends MyMap<string, string[][]> { }

export const multiSigGlobalFunctions: MinMultiSigs =
  // Key: Function name. Value: Array of signatures, consisting of array of argument names.
  new MyMap<string, string[][]>()
    .set("arraySort",
      [
        [
          "array",
          "sort_type",
          "sort_order"
        ],
        [
          "array",
          "callback"
        ]
      ]
    )
    .set("createObject",
      [
        [
          "type='component'",
          "component_name"
        ],
        [
          "type='java'",
          "class"
        ],
        [
          "type='webservice'",
          "urltowsdl",
          "portname"
        ],
        [
          "type='.NET'",
          "class",
          "assembly",
          "server",
          "port",
          "protocol",
          "secure"
        ],
        [
          "type='com'",
          "class",
          "context",
          "serverName"
        ]
      ]
    )
    .set("isValid",
      [
        [
          "type",
          "value",
        ],
        [
          "type='regex'",
          "value",
          "pattern"
        ],
        [
          "type='range'",
          "value",
          "min",
          "max"
        ]
      ]
    )
    /*
    .set("listSort",
      [
        [
          "array",
          "sort_type",
          "sort_order",
          "delimiters",
          "includeEmptyValues"
        ],
        [
          "list",
          "callback"
        ]
      ]
    )
    */
    .set("replaceListNoCase",
      [
        [
          "String",
          "list1",
          "list2",
          "includeEmptyFields"
        ],
        [
          "String",
          "list1",
          "list2",
          "delimiter",
          "includeEmptyFields"
        ],
        [
          "String",
          "list1",
          "list2",
          "delimiterList1",
          "delimiterList2",
          "includeEmptyFields"
        ]
      ]
    )
    /*
    .set("structNew",
      [
        [
          "structType",
          "sortType",
          "sortOrder",
          "localeSensitive"
        ],
        [
          "structType",
          "callback"
        ]
      ]
    )
    .set("structSort",
      [
        [
          "base",
          "sorttype",
          "sortorder",
          "pathtosubelement",
          "localeSensitive"
        ],
        [
          "base",
          "callback"
        ]
      ]
    )
    .set("structToSorted",
      [
        [
          "anyStruct",
          "sorttype",
          "sortorder",
          "localeSensitive"
        ],
        [
          "anyStruct",
          "callback"
        ]
      ]
    )
    .set("fileWrite",
      [
        [
          "filePath",
          "data",
          "charset"
        ],
        [
          "fileObj",
          "data"
        ]
      ]
    )
    */
  ;
