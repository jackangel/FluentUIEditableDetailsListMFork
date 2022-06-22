"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _react = _interopRequireWildcard(require("react"));

var _editcontroltype = require("../types/editcontroltype");

var _datepickerconfig = require("./datepickerconfig");

var _editablegridstyles = require("./editablegridstyles");

var _helper = require("./helper");

var _picker = _interopRequireDefault(require("./pickercontrol/picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddRowPanel = function AddRowPanel(props) {
  var AddSpinRef = /*#__PURE__*/_react["default"].createRef();

  var updateObj = {};

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      columnValuesObj = _useState2[0],
      setColumnValuesObj = _useState2[1];

  (0, _react.useEffect)(function () {
    var tmpColumnValuesObj = {};
    props.columnConfigurationData.forEach(function (item, index) {
      tmpColumnValuesObj[item.key] = {
        'value': (0, _helper.GetDefault)(item.dataType),
        'isChanged': false,
        'error': null
      };
    });
    setColumnValuesObj(tmpColumnValuesObj);
  }, [props.columnConfigurationData]);

  var SetObjValues = function SetObjValues(key, value) {
    var isChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var errorMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    setColumnValuesObj(_objectSpread(_objectSpread({}, columnValuesObj), {}, _defineProperty({}, key, {
      'value': value,
      'isChanged': isChanged,
      'error': errorMessage
    })));
  };

  var onDropDownChange = function onDropDownChange(event, selectedDropdownItem, item) {
    SetObjValues(item.key, selectedDropdownItem === null || selectedDropdownItem === void 0 ? void 0 : selectedDropdownItem.text);
  };

  var onTextUpdate = function onTextUpdate(ev, text, column) {
    if (!(0, _helper.IsValidDataType)(column.dataType, text)) {
      SetObjValues(ev.target.id, text, false, "Data should be of type '".concat(column.dataType, "'"));
      return;
    }

    SetObjValues(ev.target.id, (0, _helper.ParseType)(column.dataType, text));
  };

  var onPanelSubmit = function onPanelSubmit() {
    var objectKeys = Object.keys(columnValuesObj);
    objectKeys.forEach(function (objKey) {
      if (columnValuesObj[objKey]['isChanged']) {
        updateObj[objKey] = columnValuesObj[objKey]['value'];
      }
    });
    props.onChange(updateObj, props.enableRowsCounterField ? AddSpinRef.current.value : 1);
  };

  var onCellPickerTagListChanged = function onCellPickerTagListChanged(cellPickerTagList, item) {
    if (cellPickerTagList && cellPickerTagList[0] && cellPickerTagList[0].name) SetObjValues(item.key, cellPickerTagList[0].name);else SetObjValues(item.key, '');
  };

  var onCellDateChange = function onCellDateChange(date, item) {
    SetObjValues(item.key, date);
  };

  var createTextFields = function createTextFields() {
    var tmpRenderObj = [];
    props.columnConfigurationData.forEach(function (item, index) {
      var _item$dropdownValues, _item$pickerOptions$p, _item$pickerOptions, _item$pickerOptions2;

      switch (item.inputType) {
        case _editcontroltype.EditControlType.Date:
          tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DatePicker, {
            label: item.text,
            strings: _datepickerconfig.DayPickerStrings,
            placeholder: "Select a date...",
            ariaLabel: "Select a date",
            onSelectDate: function onSelectDate(date) {
              return onCellDateChange(date, item);
            } //value={props != null && props.panelValues != null ? new Date(props.panelValues[item.key]) : new Date()}
            ,
            value: new Date()
          }));
          break;

        case _editcontroltype.EditControlType.DropDown:
          tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
            label: item.text,
            options: (_item$dropdownValues = item.dropdownValues) !== null && _item$dropdownValues !== void 0 ? _item$dropdownValues : [],
            onChange: function onChange(ev, selected) {
              return onDropDownChange(ev, selected, item);
            }
          }));
          break;

        case _editcontroltype.EditControlType.Picker:
          tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
            className: _editablegridstyles.controlClass.pickerLabel
          }, item.text), /*#__PURE__*/_react["default"].createElement(_picker["default"], {
            arialabel: item.text,
            selectedItemsLimit: 1,
            pickerTags: (_item$pickerOptions$p = (_item$pickerOptions = item.pickerOptions) === null || _item$pickerOptions === void 0 ? void 0 : _item$pickerOptions.pickerTags) !== null && _item$pickerOptions$p !== void 0 ? _item$pickerOptions$p : [],
            minCharLimitForSuggestions: 2,
            onTaglistChanged: function onTaglistChanged(selectedItem) {
              return onCellPickerTagListChanged(selectedItem, item);
            },
            pickerDescriptionOptions: (_item$pickerOptions2 = item.pickerOptions) === null || _item$pickerOptions2 === void 0 ? void 0 : _item$pickerOptions2.pickerDescriptionOptions
          })));
          break;

        case _editcontroltype.EditControlType.MultilineTextField:
          tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
            errorMessage: columnValuesObj[item.key].error,
            name: item.text,
            multiline: true,
            rows: 1,
            id: item.key,
            label: item.text,
            styles: _editablegridstyles.textFieldStyles,
            onChange: function onChange(ev, text) {
              return onTextUpdate(ev, text, item);
            },
            value: columnValuesObj[item.key].value || ''
          }));
          break;

        default:
          tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
            errorMessage: columnValuesObj[item.key].error,
            name: item.text,
            id: item.key,
            label: item.text,
            styles: _editablegridstyles.textFieldStyles,
            onChange: function onChange(ev, text) {
              return onTextUpdate(ev, text, item);
            },
            value: columnValuesObj[item.key].value || ''
          }));
          break;
      }
    });

    if (props.enableRowsCounterField) {
      tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.SpinButton, {
        componentRef: AddSpinRef,
        label: "# of Rows to Add",
        labelPosition: _officeUiFabricReact.Position.top,
        defaultValue: "1",
        min: 0,
        max: 100,
        step: 1,
        incrementButtonAriaLabel: "Increase value by 1",
        decrementButtonAriaLabel: "Decrease value by 1",
        styles: {
          spinButtonWrapper: {
            width: 75
          }
        }
      }));
    }

    return tmpRenderObj;
  };

  return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    tokens: _editablegridstyles.verticalGapStackTokens
  }, columnValuesObj && createTextFields()), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    horizontal: true,
    disableShrink: true,
    styles: _editablegridstyles.stackStyles,
    tokens: _editablegridstyles.horizontalGapStackTokens
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.PrimaryButton, {
    text: "Save To Grid",
    className: _editablegridstyles.controlClass.submitStylesEditpanel,
    onClick: onPanelSubmit,
    allowDisabledFocus: true,
    disabled: columnValuesObj && Object.keys(columnValuesObj).some(function (k) {
      return columnValuesObj[k] && columnValuesObj[k].error && columnValuesObj[k].error.length > 0;
    }) || false
  })));
};

var _default = AddRowPanel;
exports["default"] = _default;