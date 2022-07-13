"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operation = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var Operation;
exports.Operation = Operation;

(function (Operation) {
  Operation[Operation["None"] = 1] = "None";
  Operation[Operation["Add"] = 2] = "Add";
  Operation[Operation["Update"] = 3] = "Update";
  Operation[Operation["Delete"] = 4] = "Delete";
})(Operation || (exports.Operation = Operation = {}));