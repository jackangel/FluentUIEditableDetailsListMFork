"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportType = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var ExportType;
exports.ExportType = ExportType;

(function (ExportType) {
  ExportType[ExportType["XLSX"] = 0] = "XLSX";
  ExportType[ExportType["CSV"] = 1] = "CSV";
})(ExportType || (exports.ExportType = ExportType = {}));