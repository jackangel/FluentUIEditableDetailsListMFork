"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculationType = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var CalculationType;
exports.CalculationType = CalculationType;

(function (CalculationType) {
  CalculationType[CalculationType["Addition"] = 0] = "Addition";
  CalculationType[CalculationType["Subtraction"] = 1] = "Subtraction";
  CalculationType[CalculationType["Multiplication"] = 2] = "Multiplication";
  CalculationType[CalculationType["Division"] = 3] = "Division";
})(CalculationType || (exports.CalculationType = CalculationType = {}));