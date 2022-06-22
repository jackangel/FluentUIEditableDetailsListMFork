"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditControlType = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var EditControlType;
exports.EditControlType = EditControlType;

(function (EditControlType) {
  EditControlType[EditControlType["None"] = 0] = "None";
  EditControlType[EditControlType["TextField"] = 1] = "TextField";
  EditControlType[EditControlType["DropDown"] = 2] = "DropDown";
  EditControlType[EditControlType["Date"] = 3] = "Date";
  EditControlType[EditControlType["MultilineTextField"] = 4] = "MultilineTextField";
  EditControlType[EditControlType["DateTime"] = 5] = "DateTime";
  EditControlType[EditControlType["Picker"] = 6] = "Picker";
  EditControlType[EditControlType["Link"] = 7] = "Link";
  EditControlType[EditControlType["Checkbox"] = 8] = "Checkbox";
})(EditControlType || (exports.EditControlType = EditControlType = {}));