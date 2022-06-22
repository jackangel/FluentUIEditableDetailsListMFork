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

var ColumnUpdateDialog = function ColumnUpdateDialog(props) {
  var controlClass = (0, _officeUiFabricReact.mergeStyleSets)({
    inputClass: {
      display: 'block',
      width: '100%'
    },
    dialogClass: {
      padding: 20
    }
  });
  var textFieldStyles = {
    fieldGroup: {}
  };

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      gridColumn = _useState2[0],
      setGridColumn = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var stackTokens = {
    childrenGap: 10
  };
  var dropdownStyles = {
    dropdown: {
      width: '100%'
    }
  };
  (0, _react.useEffect)(function () {
    var tmpColumnValuesObj = {};
    props.columnConfigurationData.filter(function (x) {
      return x.editable == true;
    }).forEach(function (item, index) {
      tmpColumnValuesObj[item.key] = {
        'value': (0, _helper.GetDefault)(item.dataType),
        'isChanged': false,
        'error': null
      };
    });
    setInputValue(tmpColumnValuesObj);
  }, [props.columnConfigurationData]);

  var SetObjValues = function SetObjValues(key, value) {
    var isChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var errorMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var inputValueTmp = _objectSpread({}, inputValue);

    var objectKeys = Object.keys(inputValueTmp);
    objectKeys.forEach(function (objKey) {
      inputValueTmp[objKey]['isChanged'] = false;
    });
    inputValueTmp[key] = {
      'value': value,
      'isChanged': isChanged,
      'error': errorMessage
    };
    setInputValue(inputValueTmp);
  };

  var onTextUpdate = function onTextUpdate(ev, text, column) {
    if (!(0, _helper.IsValidDataType)(column === null || column === void 0 ? void 0 : column.dataType, text)) {
      SetObjValues(ev.target.id, text, false, "Data should be of type '".concat(column.dataType, "'"));
      return;
    }

    SetObjValues(ev.target.id, (0, _helper.ParseType)(column.dataType, text));
  };

  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputFieldContent = _React$useState2[0],
      setInputFieldContent = _React$useState2[1];

  var _onSelectDate = function onSelectDate(date, item) {
    SetObjValues(item.key, date);
  };

  var onCellPickerTagListChanged = function onCellPickerTagListChanged(cellPickerTagList, item) {
    if (cellPickerTagList && cellPickerTagList[0] && cellPickerTagList[0].name) SetObjValues(item.key, cellPickerTagList[0].name);else SetObjValues(item.key, '');
  };

  var onDropDownChange = function onDropDownChange(event, selectedDropdownItem, item) {
    SetObjValues(item.key, selectedDropdownItem === null || selectedDropdownItem === void 0 ? void 0 : selectedDropdownItem.text);
  };

  var onSelectGridColumn = function onSelectGridColumn(event, item) {
    setGridColumn(item.key.toString());
  };

  var closeDialog = _react["default"].useCallback(function () {
    if (props.onDialogCancel) {
      props.onDialogCancel();
    }

    setInputFieldContent(undefined);
  }, []);

  var saveDialog = function saveDialog() {
    if (props.onDialogSave) {
      var inputValueTmp = {};
      var objectKeys = Object.keys(inputValue);
      var BreakException = {};

      try {
        objectKeys.forEach(function (objKey) {
          if (inputValue[objKey]['isChanged']) {
            inputValueTmp[objKey] = inputValue[objKey]['value'];
            throw BreakException;
          }
        });
      } catch (e) {// if (e !== BreakException) throw e;
      }

      props.onDialogSave(inputValueTmp);
    }

    setInputFieldContent(undefined);
  };

  var createDropDownOptions = function createDropDownOptions() {
    var dropdownOptions = [];
    props.columnConfigurationData.forEach(function (item, index) {
      if (item.editable == true) {
        dropdownOptions.push({
          key: item.key,
          text: item.text
        });
      }
    });
    return dropdownOptions;
  };

  var options = createDropDownOptions();

  var GetInputFieldContent = function GetInputFieldContent() {
    var _column$0$pickerOptio, _column$0$pickerOptio2, _column$0$pickerOptio3, _column$0$dropdownVal;

    var column = props.columnConfigurationData.filter(function (x) {
      return x.key == gridColumn;
    });

    if (column.length > 0) {
      switch (column[0].inputType) {
        case _editcontroltype.EditControlType.Date:
          return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DatePicker, {
            strings: _datepickerconfig.DayPickerStrings,
            placeholder: "Select a date...",
            ariaLabel: "Select a date",
            className: controlClass.inputClass,
            onSelectDate: function onSelectDate(date) {
              return _onSelectDate(date, column[0]);
            } //value={new Date()}

          });

        case _editcontroltype.EditControlType.Picker:
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_picker["default"], {
            arialabel: column[0].text,
            selectedItemsLimit: 1,
            pickerTags: (_column$0$pickerOptio = (_column$0$pickerOptio2 = column[0].pickerOptions) === null || _column$0$pickerOptio2 === void 0 ? void 0 : _column$0$pickerOptio2.pickerTags) !== null && _column$0$pickerOptio !== void 0 ? _column$0$pickerOptio : [],
            minCharLimitForSuggestions: 2,
            onTaglistChanged: function onTaglistChanged(selectedItem) {
              return onCellPickerTagListChanged(selectedItem, column[0]);
            },
            pickerDescriptionOptions: (_column$0$pickerOptio3 = column[0].pickerOptions) === null || _column$0$pickerOptio3 === void 0 ? void 0 : _column$0$pickerOptio3.pickerDescriptionOptions
          }));

        case _editcontroltype.EditControlType.DropDown:
          return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
            label: column[0].text,
            options: (_column$0$dropdownVal = column[0].dropdownValues) !== null && _column$0$dropdownVal !== void 0 ? _column$0$dropdownVal : [],
            onChange: function onChange(ev, selected) {
              return onDropDownChange(ev, selected, column[0]);
            }
          });

        case _editcontroltype.EditControlType.MultilineTextField:
          return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
            errorMessage: inputValue[column[0].key].error,
            className: controlClass.inputClass,
            multiline: true,
            rows: 1,
            placeholder: "Enter '".concat(column[0].text, "'..."),
            id: column[0].key,
            styles: textFieldStyles,
            onChange: function onChange(ev, text) {
              return onTextUpdate(ev, text, column[0]);
            },
            value: inputValue[column[0].key].value || ''
          });

        default:
          return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
            errorMessage: inputValue[column[0].key].error,
            className: controlClass.inputClass,
            placeholder: "Enter '".concat(column[0].text, "'..."),
            onChange: function onChange(ev, text) {
              return onTextUpdate(ev, text, column[0]);
            },
            styles: textFieldStyles,
            id: column[0].key,
            value: inputValue[column[0].key].value || ''
          });
      }
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  };

  return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dialog, {
    hidden: !inputFieldContent,
    onDismiss: closeDialog,
    closeButtonAriaLabel: "Close"
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    grow: true,
    verticalAlign: "space-between",
    tokens: stackTokens
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, {
    grow: 1
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
    placeholder: "Select the Column",
    options: options,
    styles: dropdownStyles,
    onChange: onSelectGridColumn
  })), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, {
    grow: 1
  }, GetInputFieldContent()), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack.Item, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DialogFooter, {
    className: controlClass.inputClass
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.PrimaryButton // eslint-disable-next-line react/jsx-no-bind
  , {
    onClick: saveDialog,
    text: "Save",
    disabled: gridColumn ? inputValue[gridColumn].error != null && inputValue[gridColumn].error.length > 0 : false
  }), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.DefaultButton, {
    onClick: closeDialog,
    text: "Cancel"
  })))));
};

var _default = ColumnUpdateDialog;
exports["default"] = _default;