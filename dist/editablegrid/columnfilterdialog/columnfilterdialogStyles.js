"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textFieldStyles = exports.stackTokens = exports.modelProps = exports.dropdownStyles = exports.controlClass = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var dropdownStyles = {
  dropdown: {
    width: '90%',
    margin: 10
  }
};
exports.dropdownStyles = dropdownStyles;
var controlClass = (0, _officeUiFabricReact.mergeStyleSets)({
  textFieldClass: {
    display: 'block',
    margin: 10,
    width: '90%'
  },
  datePickerClass: {
    display: 'block',
    margin: 10,
    width: '90%'
  },
  dialogFooterStyles: {
    display: 'block',
    margin: 10,
    width: '90%'
  }
});
exports.controlClass = controlClass;
var stackTokens = {
  childrenGap: 20,
  maxWidth: 1000
};
exports.stackTokens = stackTokens;
var textFieldStyles = {
  fieldGroup: {}
};
exports.textFieldStyles = textFieldStyles;
var modelProps = {
  isBlocking: false,
  styles: {
    main: {
      maxWidth: '100vh'
    }
  }
};
exports.modelProps = modelProps;