"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.stackTokens = exports.dropdownStyles = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var dropdownStyles = {
  dropdown: {
    width: '90%',
    margin: 10
  }
};
exports.dropdownStyles = dropdownStyles;
var styles = (0, _officeUiFabricReact.mergeStyleSets)({
  callout: {
    maxWidth: 500,
    padding: 30
  },
  textFieldClass: {
    display: 'block',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '90%'
  }
});
exports.styles = styles;
var stackTokens = {
  childrenGap: 20,
  maxWidth: 1000
};
exports.stackTokens = stackTokens;