"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShallowCopyEditGridToDefaultGrid = exports.ShallowCopyDefaultGridToEditGrid = exports.InitializeInternalGridEditStructure = exports.ResetGridRowID = exports.InitializeInternalGrid = void 0;

var _operation = require("../types/operation");

var _officeUiFabricReact = require("office-ui-fabric-react");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
(0, _officeUiFabricReact.initializeIcons)();

var InitializeInternalGrid = function InitializeInternalGrid(items) {
  return items.map(function (obj, index) {
    if (Object.keys(obj).indexOf('_grid_row_id_') == -1 && Object.keys(obj).indexOf('_grid_row_operation_') == -1) {
      obj._grid_row_id_ = index;
      obj._grid_row_operation_ = _operation.Operation.None;
      obj._is_filtered_in_ = true;
      obj._is_filtered_in_grid_search_ = true;
      obj._is_filtered_in_column_filter_ = true;
    }

    return obj;
  });
};

exports.InitializeInternalGrid = InitializeInternalGrid;

var ResetGridRowID = function ResetGridRowID(items) {
  return items.map(function (obj, index) {
    obj._grid_row_id_ = index;
    return obj;
  });
};

exports.ResetGridRowID = ResetGridRowID;

var InitializeInternalGridEditStructure = function InitializeInternalGridEditStructure(items) {
  var activateCellEditTmp = [];
  items.forEach(function (item, index) {
    var activateCellEditRowTmp = {
      'isActivated': false,
      properties: {}
    };
    var objectKeys = Object.keys(item);
    objectKeys.forEach(function (objKey) {
      activateCellEditRowTmp.properties[objKey] = {
        'activated': false,
        'value': item[objKey],
        'error': null
      };
    });
    activateCellEditTmp.push(activateCellEditRowTmp);
  });
  return activateCellEditTmp;
};

exports.InitializeInternalGridEditStructure = InitializeInternalGridEditStructure;

var ShallowCopyDefaultGridToEditGrid = function ShallowCopyDefaultGridToEditGrid(defaultGrid, editGrid) {
  defaultGrid.forEach(function (item, index) {
    var objectKeys = Object.keys(item);
    objectKeys.forEach(function (objKey) {
      editGrid[index].properties[objKey]['value'] = item[objKey];
    });
  });
  return editGrid;
};

exports.ShallowCopyDefaultGridToEditGrid = ShallowCopyDefaultGridToEditGrid;

var ShallowCopyEditGridToDefaultGrid = function ShallowCopyEditGridToDefaultGrid(defaultGrid, editGrid) {
  editGrid.forEach(function (item) {
    var index = defaultGrid.findIndex(function (row) {
      return row._grid_row_id_ == item.properties._grid_row_id_.value;
    });

    if (index >= 0) {
      var objectKeys = Object.keys(item.properties);
      objectKeys.forEach(function (objKey) {
        if (defaultGrid[index][objKey] != item.properties[objKey].value) {
          defaultGrid[index][objKey] = item.properties[objKey].value;

          if (defaultGrid[index]['_grid_row_operation_'] != _operation.Operation.Add && defaultGrid[index]['_grid_row_operation_'] != _operation.Operation.Update) {
            defaultGrid[index]['_grid_row_operation_'] = _operation.Operation.Update;
          }
        }
      });
    }
  });
  return defaultGrid;
};

exports.ShallowCopyEditGridToDefaultGrid = ShallowCopyEditGridToDefaultGrid;