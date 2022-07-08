"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportToExcelUtil = exports.ExportToCSVUtil = void 0;

var XLSX = _interopRequireWildcard(require("xlsx"));

var FileSaver = _interopRequireWildcard(require("file-saver"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var ExportToExcelUtil = function ExportToExcelUtil(exportData, fileName) {
  var fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  var ws = XLSX.utils.json_to_sheet(exportData);
  var wb = {
    Sheets: {
      'data': ws
    },
    SheetNames: ['data']
  };
  var excelBuffer = XLSX.write(wb, {
    bookType: 'xlsx',
    type: 'array'
  });
  var data = new Blob([excelBuffer], {
    type: fileType
  });
  FileSaver.saveAs(data, fileName);
};

exports.ExportToExcelUtil = ExportToExcelUtil;

var ExportToCSVUtil = function ExportToCSVUtil(exportData, fileName) {
  if (!exportData || !exportData.length) {
    return;
  }

  var separator = ',';
  var keys = Object.keys(exportData[0]);
  var csvContent = keys.join(separator) + '\n' + exportData.map(function (row) {
    return keys.map(function (k) {
      var cell = row[k] === null || row[k] === undefined ? '' : row[k];
      cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');

      if (cell.search(/("|,|\n)/g) >= 0) {
        cell = "\"".concat(cell, "\"");
      }

      return cell;
    }).join(separator);
  }).join('\n');
  var blob = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8;'
  });

  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, fileName);
  } else {
    var link = document.createElement('a');

    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      link.dataset.interception = 'off';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

exports.ExportToCSVUtil = ExportToCSVUtil;