"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verticalGapStackTokens = exports.textFieldStyles = exports.stackStyles = exports.horizontalGapStackTokens = exports.dropdownStyles = exports.controlClass = exports.GetDynamicSpanStyles = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _helper = require("./helper");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var stackStyles = {
  root: {
    width: 500
  }
};
exports.stackStyles = stackStyles;
var controlClass = (0, _officeUiFabricReact.mergeStyleSets)({
  control: {
    marginBottom: '10px',
    marginRight: '30px',
    maxWidth: '300px'
  },
  searchStyles: {
    marginTop: '5px'
  },
  submitStyles: {
    marginTop: '20px',
    marginLeft: '10px'
  },
  buttonStyles: {
    margin: 5
  },
  textFieldClass: {
    display: 'block',
    margin: 10
  },
  spanStyles: {
    display: 'inline-block',
    width: '100%',
    height: '100%' //lineHeight:'250%'

  },
  dialogSubMessageStyles: {
    margin: 10
  },
  dialogHeaderStyles: {
    margin: 10
  },
  submitStylesEditpanel: {
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    maxWidth: '300px'
  },
  labelValue: {
    fontWeight: 'bold'
  },
  pickerLabel: {
    color: '#323130',
    fontWeight: 600,
    padding: '5px 0px',
    margin: '5px 0px'
  },
  plainCard: {
    width: 380,
    height: 320,
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
exports.controlClass = controlClass;

var GetDynamicSpanStyles = function GetDynamicSpanStyles(column, cellValue) {
  var _column$cellStyleRule, _column$dataType, _styleRule$whenTrue, _styleRule$whenFalse, _styleRule$whenTrue2, _styleRule$whenFalse2;

  var styleRule = (_column$cellStyleRule = column.cellStyleRule) !== null && _column$cellStyleRule !== void 0 ? _column$cellStyleRule : undefined;
  var isRuleTrue = (0, _helper.EvaluateRule)((_column$dataType = column.dataType) !== null && _column$dataType !== void 0 ? _column$dataType : 'string', cellValue, styleRule);
  var styles = (0, _officeUiFabricReact.mergeStyleSets)({
    dynamicSpanStyle: {
      display: 'inline-block',
      width: '100%',
      height: '100%',
      //textAlign:'center',
      color: !column.cellStyleRule || !column.cellStyleRule.enable ? undefined : isRuleTrue ? styleRule === null || styleRule === void 0 ? void 0 : (_styleRule$whenTrue = styleRule.whenTrue) === null || _styleRule$whenTrue === void 0 ? void 0 : _styleRule$whenTrue.textColor : styleRule === null || styleRule === void 0 ? void 0 : (_styleRule$whenFalse = styleRule.whenFalse) === null || _styleRule$whenFalse === void 0 ? void 0 : _styleRule$whenFalse.textColor,
      //backgroundColor: (!column.cellStyleRule || !column.cellStyleRule.enable) ? undefined : (isRuleTrue ? styleRule?.whenTrue?.backgroundColor : styleRule?.whenFalse?.backgroundColor),
      //lineHeight:'250%',
      fontWeight: !column.cellStyleRule || !column.cellStyleRule.enable ? undefined : isRuleTrue ? styleRule === null || styleRule === void 0 ? void 0 : (_styleRule$whenTrue2 = styleRule.whenTrue) === null || _styleRule$whenTrue2 === void 0 ? void 0 : _styleRule$whenTrue2.fontWeight : styleRule === null || styleRule === void 0 ? void 0 : (_styleRule$whenFalse2 = styleRule.whenFalse) === null || _styleRule$whenFalse2 === void 0 ? void 0 : _styleRule$whenFalse2.fontWeight
    }
  });
  return styles.dynamicSpanStyle;
};

exports.GetDynamicSpanStyles = GetDynamicSpanStyles;
var verticalGapStackTokens = {
  childrenGap: 15,
  padding: 10
};
exports.verticalGapStackTokens = verticalGapStackTokens;
var horizontalGapStackTokens = {
  childrenGap: 10,
  padding: 10
};
exports.horizontalGapStackTokens = horizontalGapStackTokens;
var textFieldStyles = {
  fieldGroup: {}
};
exports.textFieldStyles = textFieldStyles;
var dropdownStyles = {
  dropdown: {
    width: '90%'
  }
};
exports.dropdownStyles = dropdownStyles;