"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _react = _interopRequireWildcard(require("react"));

var _filterliststyles = require("./filterliststyles");

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

var FilterList = function FilterList(props) {
  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filterItemsList = _React$useState2[0],
      setFilterItemsList = _React$useState2[1];

  var _React$useState3 = _react["default"].useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      filterListContent = _React$useState4[0],
      setFilterListContent = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      appliedFilters = _React$useState6[0],
      setAppliedFilters = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(true),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isSelectAllIndeterminate = _React$useState8[0],
      setIsSelectAllIndeterminate = _React$useState8[1];

  var _React$useState9 = _react["default"].useState(true),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isSelectAllChecked = _React$useState10[0],
      setIsSelectAllChecked = _React$useState10[1];

  (0, _react.useEffect)(function () {
    if (props && props.filterList && props.filterList.length > 0) {
      setFilterItemsList(props.filterList.map(function (item, index) {
        return {
          key: index,
          text: item.text,
          isFilteredIn: true,
          isChecked: item.isChecked
        };
      }));
      setAppliedFilters(props.filterList.map(function (item, index) {
        return {
          text: item.text,
          isChecked: item.isChecked
        };
      }));
    } else {
      setFilterItemsList([]);
    }
  }, [props.filterList]);
  (0, _react.useEffect)(function () {}, [appliedFilters]);
  (0, _react.useEffect)(function () {
    SetIndeterminate(filterItemsList);

    if (filterItemsList && filterItemsList.length > 0) {
      var tmpRenderObj = [];
      filterItemsList.filter(function (item) {
        return item.isFilteredIn == true;
      }).forEach(function (item, index) {
        tmpRenderObj.push( /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Checkbox, {
          label: item.text,
          key: item.key,
          onChange: function onChange(ev, checked) {
            return onCheckChanged(ev, checked, item.key, item.text);
          } //defaultChecked={item.isChecked}
          ,
          className: _filterliststyles.styles.checkbox,
          checked: item.isChecked
        }));
      });
      setFilterListContent(tmpRenderObj);
    } else {
      setFilterListContent(undefined);
    }
  }, [filterItemsList]);

  var SetIndeterminate = function SetIndeterminate(filterItemsList) {
    var checkedCount = filterItemsList.filter(function (item) {
      return item.isChecked == true;
    }).length;
    var totalCount = filterItemsList.length;
    var uncheckedCount = totalCount - checkedCount;

    if (checkedCount == totalCount) {
      setIsSelectAllIndeterminate(false);
      setIsSelectAllChecked(true);
    } else if (uncheckedCount == totalCount) {
      setIsSelectAllIndeterminate(false);
      setIsSelectAllChecked(false);
    } else {
      setIsSelectAllIndeterminate(true);
      setIsSelectAllChecked(false);
    }
  };

  function onCheckChanged(ev, isChecked, key, text) {
    var filterItemsListTmp = _toConsumableArray(filterItemsList);

    filterItemsListTmp.filter(function (item) {
      return item.key == key;
    }).map(function (item) {
      return item.isChecked = isChecked;
    });
    setFilterItemsList(filterItemsListTmp);

    var appliedFiltersTmp = _toConsumableArray(appliedFilters);

    appliedFiltersTmp.filter(function (item) {
      return item.text == text;
    }).map(function (item) {
      return item.isChecked = isChecked;
    });
    setAppliedFilters(appliedFiltersTmp);
  }

  var onSelectAllCheckChanged = function onSelectAllCheckChanged(ev, isChecked) {
    var filterItemsListTmp = _toConsumableArray(filterItemsList);

    filterItemsListTmp.map(function (item) {
      return item.isChecked = isChecked;
    });
    setFilterItemsList(filterItemsListTmp);

    var appliedFiltersTmp = _toConsumableArray(appliedFilters);

    appliedFiltersTmp.map(function (item) {
      return item.isChecked = isChecked;
    });
    setAppliedFilters(appliedFiltersTmp);
  };

  var onReset = function onReset() {
    var filterItemsListTmp = _toConsumableArray(filterItemsList);

    filterItemsListTmp.map(function (item) {
      return item.isChecked = false;
    });
    setFilterItemsList(filterItemsListTmp);

    var appliedFiltersTmp = _toConsumableArray(appliedFilters);

    appliedFiltersTmp.map(function (item) {
      return item.isChecked = false;
    });
    setAppliedFilters(appliedFiltersTmp);
  };

  var onApply = function onApply() {
    if (props.onApply) {
      var onApplyParams = {
        columnKey: props.columnKey,
        columnName: props.columnName,
        filterList: appliedFilters
      };
      props.onApply(onApplyParams);
    }
  };

  var onFilterTextUpdate = function onFilterTextUpdate(ev, text) {
    if (text) {
      var searchResult = _toConsumableArray(filterItemsList);

      searchResult.filter(function (_data, index) {
        var BreakException = {};

        try {
          if (_data.text.toString().toLowerCase().includes(text.trim().toLowerCase())) {
            _data.isFilteredIn = true;
            throw BreakException;
          } else {
            _data.isFilteredIn = false;
          }
        } catch (e) {// if (e !== BreakException) throw e;
        }
      });
      setFilterItemsList(searchResult);
    } else {
      var filterItemsListTmp = _toConsumableArray(filterItemsList);

      filterItemsListTmp.map(function (item) {
        return item.isFilteredIn = true;
      });
      setFilterItemsList(filterItemsListTmp);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    verticalAlign: "start",
    tokens: _filterliststyles.stackTokens
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TextField, {
    placeholder: "Filter ".concat(props.columnName),
    onChange: function onChange(ev, text) {
      return onFilterTextUpdate(ev, text);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _officeUiFabricReact.mergeStyles)({
      height: '25vh',
      width: '30vh',
      position: 'relative',
      backgroundColor: 'white'
    })
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.ScrollablePane, {
    scrollbarVisibility: _officeUiFabricReact.ScrollbarVisibility.auto
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Checkbox, {
    label: "(Select All)",
    key: 'SelectAll',
    indeterminate: isSelectAllIndeterminate,
    checked: isSelectAllChecked,
    className: _filterliststyles.styles.selectAllCheckbox,
    onChange: function onChange(ev, checked) {
      return onSelectAllCheckChanged(ev, checked);
    }
  }), filterListContent)), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.Stack, {
    horizontal: true,
    horizontalAlign: "start"
  }, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.ActionButton, {
    className: _filterliststyles.styles.button,
    onClick: onApply,
    text: "Apply"
  }), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.ActionButton, {
    text: "Clear All",
    className: _filterliststyles.styles.button,
    onClick: onReset,
    disabled: appliedFilters.filter(function (item) {
      return item.isChecked == true;
    }).length == 0
  }), /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.ActionButton, {
    text: "Cancel",
    className: _filterliststyles.styles.button,
    onClick: props.onCancel
  }))));
};

var _default = FilterList;
exports["default"] = _default;