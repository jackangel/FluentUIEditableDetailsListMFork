"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _searchabledropdownstyles = require("./searchabledropdownstyles");

var _reactHooks = require("@uifabric/react-hooks");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchableDropdown = function SearchableDropdown(props) {
  var _props$field;

  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dropdownOptions = _React$useState2[0],
      setDropdownOptions = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      placeholder = _React$useState4[0],
      setPlaceHolder = _React$useState4[1];

  (0, _react.useEffect)(function () {
    setDropdownOptions(props.options);
    setPlaceHolder(props.placeholder);
  }, [props.options]);

  var onFilterTextUpdate = function onFilterTextUpdate(ev, searchText) {
    var dropdownOptionsTmp = _toConsumableArray(props.options.filter(function (x) {
      return x.itemType != _officeUiFabricReact.DropdownMenuItemType.Header;
    }));

    var matches = dropdownOptionsTmp.filter(function (x) {
      var _searchText$toLowerCa;

      return x.text.toLowerCase().indexOf((_searchText$toLowerCa = searchText === null || searchText === void 0 ? void 0 : searchText.toLowerCase()) !== null && _searchText$toLowerCa !== void 0 ? _searchText$toLowerCa : '') > -1;
    });
    setPlaceHolder("[".concat(matches.length.toString(), " match").concat(matches.length != 1 ? 'es' : '', " found]"));
    setDropdownOptions(matches);
  };

  var labelId = (0, _reactHooks.useId)('dropdown-callout-label');
  var descriptionId = (0, _reactHooks.useId)('dropdown-callout-description');
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Callout, {
    className: _searchabledropdownstyles.styles.callout,
    ariaLabelledBy: labelId,
    ariaDescribedBy: descriptionId,
    role: "filtercallout",
    gapSpace: 10,
    target: ".".concat(props.className),
    isBeakVisible: true,
    directionalHint: _officeUiFabricReact.DirectionalHint.bottomCenter
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    verticalAlign: "start",
    tokens: _searchabledropdownstyles.stackTokens
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
    id: "id-".concat(props.className),
    className: _searchabledropdownstyles.styles.textFieldClass,
    placeholder: "Search ".concat((_props$field = props.field) !== null && _props$field !== void 0 ? _props$field : ''),
    onChange: function onChange(ev, text) {
      return onFilterTextUpdate(ev, text);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _officeUiFabricReact.mergeStyles)({
      height: '10vh',
      width: '30vh',
      position: 'relative',
      backgroundColor: 'white'
    })
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.ScrollablePane, {
    scrollbarVisibility: _officeUiFabricReact.ScrollbarVisibility.auto
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Dropdown, {
    label: props.label,
    placeholder: placeholder,
    options: dropdownOptions !== null && dropdownOptions !== void 0 ? dropdownOptions : [],
    styles: props.styles,
    onChange: props.onChange,
    onDoubleClick: props.onDoubleClick
  }))))));
};

var _default = SearchableDropdown;
exports["default"] = _default;