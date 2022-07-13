"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _react = _interopRequireWildcard(require("react"));

var _filterstype = require("../../types/filterstype");

var _columnfilterdialogStyles = require("./columnfilterdialogStyles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColumnFilterDialog = function ColumnFilterDialog(props) {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      gridColumn = _useState2[0],
      setGridColumn = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      operator = _useState4[0],
      setOperator = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var onSelectGridColumn = function onSelectGridColumn(event, item, index) {
    setGridColumn(props.columnConfigurationData.filter(function (val) {
      return val.key == item.key;
    })[0]);
  };

  var onSelectOperator = function onSelectOperator(event, item, index) {
    setOperator(item.text.toString());
  };

  var onSelectValue = function onSelectValue(event, item, index) {
    setValue(item.key.toString());
  };

  var onTextUpdate = function onTextUpdate(ev, text) {
    setValue(text);
  };

  (0, _react.useEffect)(function () {
    if (gridColumn && gridColumn.key && gridColumn.key.length > 0) {
      var column = props.columnConfigurationData.filter(function (x) {
        return x.key == gridColumn.key;
      });

      if (column.length > 0) {
        var valueOptions = createValueOptions(column[0]);

        switch (column[0].dataType) {
          case 'number':
            setInputFieldContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
              className: _columnfilterdialogStyles.controlClass.textFieldClass,
              placeholder: "Value",
              onChange: function onChange(ev, text) {
                return onTextUpdate(ev, text);
              },
              styles: _columnfilterdialogStyles.textFieldStyles
            }));
            setOperatorDropDownContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
              placeholder: "Select the Column",
              options: createCompareOptions(),
              styles: _columnfilterdialogStyles.dropdownStyles,
              onChange: onSelectOperator
            }));
            break;

          case 'string':
            setInputFieldContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
              className: _columnfilterdialogStyles.controlClass.textFieldClass,
              placeholder: "Value",
              onChange: function onChange(ev, text) {
                return onTextUpdate(ev, text);
              },
              styles: _columnfilterdialogStyles.textFieldStyles
            }));
            setOperatorDropDownContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
              placeholder: "Select the Column",
              options: createCompareOptions(),
              styles: _columnfilterdialogStyles.dropdownStyles,
              onChange: onSelectOperator
            }));
            break;

          case 'date':
            setInputFieldContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
              placeholder: "Select the Column",
              options: valueOptions,
              styles: _columnfilterdialogStyles.dropdownStyles,
              onChange: onSelectValue
            }));
            setOperatorDropDownContent( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
              placeholder: "Select the Column",
              options: createCompareOptions(),
              styles: _columnfilterdialogStyles.dropdownStyles,
              onChange: onSelectOperator
            }));
            break;
        }
      }
    }
  }, [gridColumn]);

  var createDropDownOptions = function createDropDownOptions() {
    var dropdownOptions = [];
    props.columnConfigurationData.forEach(function (item, index) {
      dropdownOptions.push({
        key: item.key,
        text: item.text
      });
    });
    return dropdownOptions;
  };

  var options = createDropDownOptions();

  var createCompareOptions = function createCompareOptions() {
    if (!(gridColumn && gridColumn.key && gridColumn.key.length > 0)) {
      return [];
    }

    var dataType = props.columnConfigurationData.filter(function (x) {
      return x.key == gridColumn.key;
    })[0].dataType;
    var dropdownOptions = [];
    var operatorsOptions = [];

    switch (dataType) {
      case 'string':
        operatorsOptions = _filterstype.operatorsArr.filter(function (item) {
          return item.type == 'string';
        })[0].value;
        break;

      case 'number':
        operatorsOptions = _filterstype.operatorsArr.filter(function (item) {
          return item.type == 'number';
        })[0].value;
        break;
    }

    operatorsOptions.forEach(function (item, index) {
      dropdownOptions.push({
        key: item + index,
        text: item
      });
    });
    return dropdownOptions;
  };

  var createValueOptions = function createValueOptions(column) {
    var columnData = props.gridData.map(function (item) {
      return item[column.key];
    });
    var dropdownOptions = [];
    columnData.forEach(function (item, index) {
      dropdownOptions.push({
        key: item + index,
        text: item
      });
    });
    return dropdownOptions;
  }; //const compareOptions = createCompareOptions();


  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
    placeholder: "Select the Column",
    options: options,
    styles: _columnfilterdialogStyles.dropdownStyles,
    onChange: onSelectValue
  })),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputFieldContent = _React$useState2[0],
      setInputFieldContent = _React$useState2[1];

  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
    placeholder: "Select the Column",
    options: createCompareOptions(),
    styles: _columnfilterdialogStyles.dropdownStyles,
    onChange: onSelectValue
  })),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      operatorDropDownContent = _React$useState4[0],
      setOperatorDropDownContent = _React$useState4[1];

  var closeDialog = _react["default"].useCallback(function () {
    if (props.onDialogCancel) {
      props.onDialogCancel();
    }

    setInputFieldContent(undefined);
  }, []);

  var saveDialog = function saveDialog() {
    var filterObj = {
      column: gridColumn,
      operator: operator,
      value: value
    };

    if (props.onDialogSave) {
      props.onDialogSave(filterObj);
    }

    setInputFieldContent(undefined);
  };

  return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dialog, {
    modalProps: _columnfilterdialogStyles.modelProps,
    hidden: !inputFieldContent,
    onDismiss: closeDialog,
    closeButtonAriaLabel: "Close"
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    verticalAlign: "space-between",
    tokens: _columnfilterdialogStyles.stackTokens
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, {
    grow: 1
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
    placeholder: "Select the Column",
    options: options,
    styles: _columnfilterdialogStyles.dropdownStyles,
    onChange: onSelectGridColumn
  })), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, {
    grow: 1
  }, operatorDropDownContent), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, {
    grow: 1
  }, inputFieldContent)), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DialogFooter, {
    className: _columnfilterdialogStyles.controlClass.dialogFooterStyles
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.PrimaryButton // eslint-disable-next-line react/jsx-no-bind
  , {
    onClick: saveDialog,
    text: "Save"
  }), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DefaultButton, {
    onClick: closeDialog,
    text: "Cancel"
  }))));
};

var _default = ColumnFilterDialog;
exports["default"] = _default;