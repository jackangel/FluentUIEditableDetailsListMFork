"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDefault = exports.ParseType = exports.ConvertObjectToText = exports.EvaluateRule = exports.IsValidDataType = exports.isColumnDataTypeSupportedForFilter = exports.applyGridColumnFilter = exports.filterGridData = void 0;

var _filterstype = require("../types/filterstype");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filterGridData = function filterGridData(data, filters) {
  var dataTmp = _toConsumableArray(data);

  dataTmp.forEach(function (row) {
    var isRowIncluded = true;
    filters.forEach(function (item) {
      if (isRowIncluded) {
        var columnType = item.column.dataType;

        switch (columnType) {
          case 'number':
            isRowIncluded = isRowIncluded && (0, _filterstype.numberOperatorEval)(row[item.column.key], item.value, item.operator);
            break;

          case 'string':
            isRowIncluded = isRowIncluded && (0, _filterstype.stringOperatorEval)(row[item.column.key], item.value, item.operator);
            break;
        }
      }
    });

    if (isRowIncluded) {
      row._is_filtered_in_ = true;
    } else {
      row._is_filtered_in_ = false;
    }
  });
  return dataTmp;
};

exports.filterGridData = filterGridData;

var applyGridColumnFilter = function applyGridColumnFilter(data, gridColumnFilterArr) {
  var dataTmp = _toConsumableArray(data);

  if (gridColumnFilterArr.filter(function (item) {
    return item.isApplied == true;
  }).length > 0) {
    dataTmp.map(function (row) {
      return row._is_filtered_in_column_filter_ = true;
    });
  }

  gridColumnFilterArr.filter(function (gridColumnFilter) {
    return gridColumnFilter.isApplied == true;
  }).forEach(function (gridColumnFilter, index) {
    dataTmp.filter(function (row) {
      return row._is_filtered_in_column_filter_ == true;
    }).forEach(function (row, i) {
      row._is_filtered_in_column_filter_ = gridColumnFilter.filterCalloutProps.filterList.filter(function (a) {
        return a.isChecked == true;
      }).map(function (a) {
        return a.text;
      }).includes(row[gridColumnFilter.column.key]);
    });
  });
  return dataTmp;
};

exports.applyGridColumnFilter = applyGridColumnFilter;

var isColumnDataTypeSupportedForFilter = function isColumnDataTypeSupportedForFilter(datatype) {
  switch (datatype) {
    case 'number':
      return true;

    case 'string':
      return true;

    default:
      return false;
  }
};

exports.isColumnDataTypeSupportedForFilter = isColumnDataTypeSupportedForFilter;

var IsValidDataType = function IsValidDataType(type, text) {
  var isValid = true;

  switch (type) {
    case 'number':
      isValid = !isNaN(Number(text));
      break;
  }

  return isValid;
};

exports.IsValidDataType = IsValidDataType;

var EvaluateRule = function EvaluateRule(datatType, cellValue, styleRule) {
  if (!styleRule) {
    return false;
  }

  switch (datatType) {
    case 'number':
      return (0, _filterstype.numberOperatorEval)(Number(cellValue), styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.value, styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.operator);

    case 'string':
      return (0, _filterstype.stringOperatorEval)(String(cellValue), styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.value, styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.operator);

    case 'date':
      return (0, _filterstype.dateOperatorEval)(new Date(String(cellValue)), new Date(styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.value), styleRule === null || styleRule === void 0 ? void 0 : styleRule.rule.operator);

    default:
      return false;
  }
};

exports.EvaluateRule = EvaluateRule;

var ConvertObjectToText = function ConvertObjectToText(obj, columns) {
  var text = '';
  columns.forEach(function (col) {
    text += (obj[col.key] == null ? '' : obj[col.key]) + "\t";
  });
  return text.substring(0, text.lastIndexOf('\t'));
};

exports.ConvertObjectToText = ConvertObjectToText;

var ParseType = function ParseType(type, text) {
  if (text.trim().length == 0) {
    return null;
  }

  switch (type) {
    case 'number':
      return Number(text);

    case 'date':
      return Date.parse(text);
  }

  return text;
};

exports.ParseType = ParseType;

var GetDefault = function GetDefault(type) {
  switch (type) {
    case 'date':
      return new Date();

    default:
      return null;
  }
};

exports.GetDefault = GetDefault;