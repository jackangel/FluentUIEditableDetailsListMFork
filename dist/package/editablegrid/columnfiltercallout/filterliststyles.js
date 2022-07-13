"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.stackTokens = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var stackTokens = {
  childrenGap: 20,
  maxWidth: 1000
};
exports.stackTokens = stackTokens;
var styles = (0, _officeUiFabricReact.mergeStyleSets)({
  checkbox: {
    padding: 5
  },
  selectAllCheckbox: {
    padding: 5
  },
  button: {
    margin: 10
  }
});
exports.styles = styles;