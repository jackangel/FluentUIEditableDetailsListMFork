"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var _react = _interopRequireWildcard(require("react"));

var _cellstyleruletype = require("../../types/cellstyleruletype");

var _filterstype = require("../../types/filterstype");

var _picker = require("./picker.styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PickerControl = function PickerControl(props) {
  var _props$selectedItemsL;

  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pickerTags = _React$useState2[0],
      setPickerTags = _React$useState2[1];

  var _React$useState3 = _react["default"].useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      defaultTags = _React$useState4[0],
      setdefaultTags = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      pickerDescriptions = _React$useState6[0],
      setPickerDescriptions = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      pickerFilteredText = _React$useState8[0],
      setPickerFilteredText = _React$useState8[1];

  (0, _react.useEffect)(function () {
    if (props.pickerTags && props.pickerTags.length > 0) {
      var _props$defaultTags$ma, _props$defaultTags;

      setPickerTags(props.pickerTags.map(function (item) {
        return {
          key: item,
          name: item
        };
      }));
      setdefaultTags((_props$defaultTags$ma = props === null || props === void 0 ? void 0 : (_props$defaultTags = props.defaultTags) === null || _props$defaultTags === void 0 ? void 0 : _props$defaultTags.map(function (item) {
        return {
          key: item,
          name: item
        };
      })) !== null && _props$defaultTags$ma !== void 0 ? _props$defaultTags$ma : []);
    }
  }, [props.pickerTags]);
  (0, _react.useEffect)(function () {
    if (props && props.pickerDescriptionOptions && props.pickerDescriptionOptions.enabled && props.pickerDescriptionOptions.values) {
      setPickerDescriptions(props.pickerDescriptionOptions.values);
    }
  }, [props.pickerDescriptionOptions]);
  var pickerSuggestionsProps = {
    suggestionsHeaderText: !props.minCharLimitForSuggestions ? 'Suggested tags' : pickerFilteredText.length >= props.minCharLimitForSuggestions ? 'Suggested tags' : '',
    noResultsFoundText: !props.minCharLimitForSuggestions ? 'No suggested tags found' : pickerFilteredText.length >= props.minCharLimitForSuggestions ? 'No suggested tags found' : ''
  };

  var getTextFromItem = function getTextFromItem(item) {
    return item.name;
  };

  var listContainsTagList = function listContainsTagList(tag, tagList) {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }

    return tagList.some(function (compareTag) {
      return compareTag.key === tag.key;
    });
  };

  var filterSuggestedTags = function filterSuggestedTags(filterText, tagList) {
    setPickerFilteredText(filterText);

    if (!props.minCharLimitForSuggestions || filterText.length >= props.minCharLimitForSuggestions) {
      return GetMatchingPickerTags(filterText, pickerTags, props.suggestionRule, listContainsTagList, tagList);
    }

    return [];
  };

  var inputProps = {
    'aria-label': "".concat(props.arialabel)
  };

  var onFilterTagListChanged = function onFilterTagListChanged(tagList) {
    setdefaultTags(tagList);

    if (props.onTaglistChanged) {
      props.onTaglistChanged(tagList);
    }
  };

  var onRenderPlainCard = function onRenderPlainCard(item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _picker.classNames.plainCard
    }, pickerDescriptions.filter(function (x) {
      return x.key == item.key;
    })[0].description);
  };

  var onRenderSuggestionsItem = function onRenderSuggestionsItem(tag, itemProps) {
    var plainCardProps = {
      onRenderPlainCard: onRenderPlainCard,
      renderData: tag
    };

    if (pickerDescriptions && pickerDescriptions.length > 0) {
      return /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.HoverCard, {
        type: _officeUiFabricReact.HoverCardType.plain,
        plainCardProps: plainCardProps,
        instantOpenOnClick: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: '10px'
        },
        key: tag.key
      }, tag.name));
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: '10px'
      },
      key: tag.key
    }, tag.name);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_officeUiFabricReact.TagPicker, {
    removeButtonAriaLabel: "Remove",
    onResolveSuggestions: filterSuggestedTags,
    getTextFromItem: getTextFromItem,
    pickerSuggestionsProps: pickerSuggestionsProps,
    itemLimit: (_props$selectedItemsL = props.selectedItemsLimit) !== null && _props$selectedItemsL !== void 0 ? _props$selectedItemsL : 1,
    onChange: onFilterTagListChanged,
    selectedItems: defaultTags,
    inputProps: inputProps,
    onRenderSuggestionsItem: onRenderSuggestionsItem
  }));
};

var _default = PickerControl;
exports["default"] = _default;

function GetMatchingPickerTags(filterText, pickerTags, rule, listContainsTagList, tagList) {
  return filterText ? pickerTags.filter(function (tag) {
    return (0, _filterstype.stringOperatorEval)(tag.name.toLowerCase(), filterText.toLowerCase(), !rule ? _cellstyleruletype.StringOperators.STARTSWITH : rule) && !listContainsTagList(tag, tagList);
  }) : [];
}