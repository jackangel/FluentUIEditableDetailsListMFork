"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditType = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var EditType;
exports.EditType = EditType;

(function (EditType) {
  EditType[EditType["None"] = 0] = "None";
  EditType[EditType["ColumnEdit"] = 1] = "ColumnEdit";
  EditType[EditType["BulkEdit"] = 2] = "BulkEdit";
  EditType[EditType["RowEdit"] = 3] = "RowEdit";
  EditType[EditType["DeleteRow"] = 4] = "DeleteRow";
  EditType[EditType["AddRow"] = 5] = "AddRow";
  EditType[EditType["ColumnFilter"] = 6] = "ColumnFilter";
  EditType[EditType["AddRowWithData"] = 7] = "AddRowWithData";
})(EditType || (exports.EditType = EditType = {}));