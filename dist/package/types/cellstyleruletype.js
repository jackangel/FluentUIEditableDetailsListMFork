"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringOperators = exports.NumberAndDateOperators = void 0;
var StringOperators;
exports.StringOperators = StringOperators;

(function (StringOperators) {
  StringOperators["EQUALS"] = "equals";
  StringOperators["CONTAINS"] = "contains";
  StringOperators["STARTSWITH"] = "starts with";
  StringOperators["ENDSWITH"] = "ends with";
  StringOperators["NOTEQUALTO"] = "not equal to";
})(StringOperators || (exports.StringOperators = StringOperators = {}));

var NumberAndDateOperators;
exports.NumberAndDateOperators = NumberAndDateOperators;

(function (NumberAndDateOperators) {
  NumberAndDateOperators["GREATERTHAN"] = ">";
  NumberAndDateOperators["LESSTHAN"] = "<";
  NumberAndDateOperators["GREATERTHANOREQUALTO"] = ">=";
  NumberAndDateOperators["LESSTHANOREQUALTO"] = "<=";
  NumberAndDateOperators["EQUALTO"] = "=";
  NumberAndDateOperators["NOTEQUALTO"] = "!=";
})(NumberAndDateOperators || (exports.NumberAndDateOperators = NumberAndDateOperators = {}));