"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _react = _interopRequireDefault(require("react"));

var _reactHooks = require("@uifabric/react-hooks");

var _filtercalloutstyles = require("./filtercalloutstyles");

var _filterlist = _interopRequireDefault(require("./filterlist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FilterCallout = function FilterCallout(props) {
  var labelId = (0, _reactHooks.useId)('callout-label');
  var descriptionId = (0, _reactHooks.useId)('callout-description');
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Callout, {
    className: _filtercalloutstyles.styles.callout,
    ariaLabelledBy: labelId,
    ariaDescribedBy: descriptionId,
    role: "filtercallout",
    gapSpace: 5,
    target: ".".concat(props.columnClass),
    isBeakVisible: true,
    directionalHint: _officeUiFabricReact.DirectionalHint.topCenter
  }, /*#__PURE__*/_react["default"].createElement(_filterlist["default"], {
    onCancel: props.onCancel,
    onApply: props.onApply,
    columnKey: props.columnKey,
    columnName: props.columnName,
    filterList: props.filterList
  })));
};

var _default = FilterCallout;
exports["default"] = _default;