"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _DetailsList = require("office-ui-fabric-react/lib/components/DetailsList/DetailsList.types");

var _DetailsList2 = require("office-ui-fabric-react/lib/components/DetailsList/DetailsList");

var _CommandBar = require("office-ui-fabric-react/lib/CommandBar");

var _DetailsList3 = require("office-ui-fabric-react/lib/DetailsList");

var _MarqueeSelection = require("office-ui-fabric-react/lib/MarqueeSelection");

var _IconButton = require("office-ui-fabric-react/lib/components/Button/IconButton/IconButton");

var _officeUiFabricReact = require("office-ui-fabric-react");

var _TextField = require("office-ui-fabric-react/lib/TextField");

var _editablegridstyles = require("./editablegridstyles");

var _operation = require("../types/operation");

var _editablegridinitialize = require("./editablegridinitialize");

var _editcontroltype = require("../types/editcontroltype");

var _datepickerconfig = require("./datepickerconfig");

var _exporttype = require("../types/exporttype");

var _gridexportutil = require("./gridexportutil");

var _edittype = require("../types/edittype");

var _messagedialog = _interopRequireDefault(require("./messagedialog"));

var _columnupdatedialog = _interopRequireDefault(require("./columnupdatedialog"));

var _editpanel = _interopRequireDefault(require("./editpanel"));

var _EventEmitter = require("../eventemitter/EventEmitter");

var _columnfilterdialog = _interopRequireDefault(require("./columnfilterdialog/columnfilterdialog"));

var _helper = require("./helper");

var _filtercallout = _interopRequireDefault(require("./columnfiltercallout/filtercallout"));

var _addrowpanel = _interopRequireDefault(require("./addrowpanel"));

var _picker = _interopRequireDefault(require("./pickercontrol/picker"));

require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var EditableGrid = function EditableGrid(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editMode = _React$useState2[0],
      setEditMode = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isOpenForEdit = _React$useState4[0],
      setIsOpenForEdit = _React$useState4[1];

  var dismissPanelForEdit = React.useCallback(function () {
    return setIsOpenForEdit(false);
  }, []);

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isOpenForAdd = _React$useState6[0],
      setIsOpenForAdd = _React$useState6[1];

  var dismissPanelForAdd = React.useCallback(function () {
    return setIsOpenForAdd(false);
  }, []);

  var _useState = (0, React.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      gridData = _useState2[0],
      setGridData = _useState2[1];

  var _useState3 = (0, React.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      defaultGridData = _useState4[0],
      setDefaultGridData = _useState4[1];

  var _useState5 = (0, React.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      backupDefaultGridData = _useState6[0],
      setBackupDefaultGridData = _useState6[1];

  var _useState7 = (0, React.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      activateCellEdit = _useState8[0],
      setActivateCellEdit = _useState8[1];

  var _useState9 = (0, React.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      selectionDetails = _useState10[0],
      setSelectionDetails = _useState10[1];

  var _useState11 = (0, React.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedItems = _useState12[0],
      setSelectedItems = _useState12[1];

  var _useState13 = (0, React.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      cancellableRows = _useState14[0],
      setCancellableRows = _useState14[1];

  var _useState15 = (0, React.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      selectionCount = _useState16[0],
      setSelectionCount = _useState16[1];

  var _useState17 = (0, React.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      selectedIndices = _useState18[0],
      setSelectedIndices = _useState18[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isGridInEdit = _React$useState8[0],
      setIsGridInEdit = _React$useState8[1];

  var _React$useState9 = React.useState(undefined),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      dialogContent = _React$useState10[0],
      setDialogContent = _React$useState10[1];

  var _React$useState11 = React.useState(undefined),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      announced = _React$useState12[0],
      setAnnounced = _React$useState12[1];

  var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      isUpdateColumnClicked = _React$useState14[0],
      setIsUpdateColumnClicked = _React$useState14[1];

  var _React$useState15 = React.useState(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      isColumnFilterClicked = _React$useState16[0],
      setIsColumnFilterClicked = _React$useState16[1];

  var _useState19 = (0, React.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      showSpinner = _useState20[0],
      setShowSpinner = _useState20[1];

  var _useState21 = (0, React.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      isGridStateEdited = _useState22[0],
      setIsGridStateEdited = _useState22[1];

  var _useState23 = (0, React.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      isGridFilterEnabled = _useState24[0],
      setIsGridFilterEnabled = _useState24[1]; //const defaultTag : ITag[] = [{name: 'Designation == \'Designation1\'', key:'kushal'}];


  var _useState25 = (0, React.useState)([]),
      _useState26 = _slicedToArray(_useState25, 2),
      defaultTag = _useState26[0],
      setDefaultTag = _useState26[1];

  var _useState27 = (0, React.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      filteredColumns = _useState28[0],
      setFilteredColumns = _useState28[1];

  var _useState29 = (0, React.useState)([]),
      _useState30 = _slicedToArray(_useState29, 2),
      filterStore = _useState30[0],
      setFilterStore = _useState30[1];

  var gridColumnFilterArrRef = React.useRef([]);

  var _React$useState17 = React.useState(undefined),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      filterCalloutComponent = _React$useState18[0],
      setFilterCalloutComponent = _React$useState18[1];

  var _React$useState19 = React.useState(false),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      showFilterCallout = _React$useState20[0],
      setShowFilterCallout = _React$useState20[1];

  var _React$useState21 = React.useState({
    visible: false,
    message: '',
    subMessage: ''
  }),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      messageDialogProps = _React$useState22[0],
      setMessageDialogProps = _React$useState22[1];

  var _React$useState23 = React.useState({
    key: '',
    isAscending: false,
    isEnabled: false
  }),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      sortColObj = _React$useState24[0],
      setSortColObj = _React$useState24[1];

  var SpinRef = /*#__PURE__*/React.createRef();
  var filterStoreRef = React.useRef([]);

  var _selection = new _DetailsList3.Selection({
    onSelectionChanged: function onSelectionChanged() {
      return setSelectionDetails(_getSelectionDetails());
    }
  });

  var onSearchHandler = function onSearchHandler(event) {
    if (event && event.target) {
      var queryText = event.target.value;

      if (queryText) {
        var searchableColumns = props.columns.filter(function (x) {
          return x.includeColumnInSearch == true;
        }).map(function (x) {
          return x.key;
        });

        var searchResult = _toConsumableArray(defaultGridData);

        searchResult.filter(function (_gridData, index) {
          var BreakException = {};

          try {
            searchableColumns.forEach(function (item2, index2) {
              if (_gridData[item2] && _gridData[item2].toString().toLowerCase() && _gridData[item2].toString().toLowerCase().includes(queryText.trim().toLowerCase())) {
                _gridData._is_filtered_in_grid_search_ = true;
                throw BreakException;
              } else {
                _gridData._is_filtered_in_grid_search_ = false;
              }
            });
          } catch (e) {// if (e !== BreakException) throw e;
          }
        });
        setDefaultGridData(searchResult);
      } else {
        var gridDataTmp = _toConsumableArray(defaultGridData);

        gridDataTmp.map(function (item) {
          return item._is_filtered_in_grid_search_ = true;
        });
        setDefaultGridData(gridDataTmp);
      }
    } else {
      var gridDataTmp = _toConsumableArray(defaultGridData);

      gridDataTmp.map(function (item) {
        return item._is_filtered_in_grid_search_ = true;
      });
      setDefaultGridData(gridDataTmp);
    }
  };

  React.useEffect(function () {
    _EventEmitter.EventEmitter.subscribe(_EventEmitter.EventType.onSearch, onSearchHandler);

    return function cleanup() {
      _EventEmitter.EventEmitter.unsubscribe(_EventEmitter.EventType.onSearch, onSearchHandler);
    };
  });
  (0, React.useEffect)(function () {
    if (props && props.items) {
      var data = (0, _editablegridinitialize.InitializeInternalGrid)(props.items);
      setGridData(data);
      setBackupDefaultGridData(data.map(function (obj) {
        return _objectSpread({}, obj);
      }));
      setGridEditState(false);
      SetGridItems(data);
    }
  }, [props.items]);
  (0, React.useEffect)(function () {}, [backupDefaultGridData]); // useEffect(() => {
  //     console.log('Cancellable Rows');
  //     console.log(cancellableRows);
  // }, [cancellableRows]);

  (0, React.useEffect)(function () {
    var CheckOnUpdate = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(defaultGridData.filter(function (x) {
                  return x._grid_row_operation_ != _operation.Operation.None;
                }).length > 0)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return onGridUpdate();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function CheckOnUpdate() {
        return _ref.apply(this, arguments);
      };
    }();

    CheckOnUpdate();
  }, [defaultGridData]);
  (0, React.useEffect)(function () {
    UpdateGridEditStatus(); //console.log('activate cell edit');
    //console.log(activateCellEdit);

    if (props.enableDefaultEditMode) {
      setDefaultGridData((0, _editablegridinitialize.ShallowCopyEditGridToDefaultGrid)(defaultGridData, activateCellEdit));
    }
  }, [activateCellEdit]);
  (0, React.useEffect)(function () {
    //alert('IsGridInEdit: ' + isGridInEdit);
    if (props.onGridEditCallback) {
      props.onGridEditCallback([isGridInEdit, activateCellEdit]);
    }
  }, [isGridInEdit]);
  (0, React.useEffect)(function () {
    SetFilteredGridData(getFilterStoreRef());
  }, [filteredColumns]);
  (0, React.useEffect)(function () {
    if (filterCalloutComponent) {
      setShowFilterCallout(true);
    }
  }, [filterCalloutComponent]);

  var onGridSave = function onGridSave() {
    if (props.onGridSave) {
      props.onGridSave(defaultGridData);
    }
  };

  var onGridUpdate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!props.onGridUpdate) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return props.onGridUpdate(defaultGridData);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onGridUpdate() {
      return _ref2.apply(this, arguments);
    };
  }();

  var UpdateGridEditStatus = function UpdateGridEditStatus() {
    var gridEditStatus = false;
    var BreakException = {};

    try {
      activateCellEdit.forEach(function (item, index) {
        gridEditStatus = gridEditStatus || item.isActivated;

        if (gridEditStatus) {
          throw BreakException;
        }

        var objectKeys = Object.keys(item.properties);
        objectKeys.filter(function (key) {
          return key != '_grid_row_id_' && key != '_grid_row_operation_';
        }).forEach(function (objKey) {
          gridEditStatus = gridEditStatus || item['properties'][objKey]['activated'];

          if (gridEditStatus) {
            throw BreakException;
          }
        });
      });
    } catch (e) {// if (e !== BreakException) throw e;
    }

    if (!isGridInEdit && gridEditStatus || isGridInEdit && !gridEditStatus) {
      setIsGridInEdit(gridEditStatus);
    }
  };

  var SetGridItems = function SetGridItems(data) {
    data = (0, _editablegridinitialize.ResetGridRowID)(data);
    setDefaultGridData(data);
    setActivateCellEdit((0, _editablegridinitialize.InitializeInternalGridEditStructure)(data));
  };

  var setGridEditState = function setGridEditState(editState) {
    if (isGridStateEdited != editState) {
      setIsGridStateEdited(editState);
    }
  };

  var SetFilteredGridData = function SetFilteredGridData(filters) {
    var filteredData = (0, _helper.filterGridData)(defaultGridData, filters);
    var activateCellEditTmp = (0, _editablegridinitialize.ShallowCopyDefaultGridToEditGrid)(defaultGridData, activateCellEdit);
    setDefaultGridData(filteredData);
    setActivateCellEdit(activateCellEditTmp);
    setGridData(filteredData);
  };
  /* #region [Grid Bulk Update Functions] */


  var onEditPanelChange = function onEditPanelChange(item) {
    var defaultGridDataTmp = UpdateBulkData(item, defaultGridData);
    dismissPanelForEdit();
    defaultGridDataTmp = CheckBulkUpdateOnChangeCallBack(item, defaultGridDataTmp);
    SetGridItems(defaultGridDataTmp);
  };
  /* #endregion */

  /* #region [Grid Column Update Functions] */


  var UpdateBulkData = function UpdateBulkData(data, defaultGridDataArr) {
    var newDefaultGridData = _toConsumableArray(defaultGridDataArr);

    selectedItems.forEach(function (item, index) {
      newDefaultGridData.filter(function (x) {
        return x._grid_row_id_ == item._grid_row_id_;
      }).map(function (row) {
        var objectKeys = Object.keys(data);
        objectKeys.forEach(function (objKey) {
          row[objKey] = data[objKey];

          if (row._grid_row_operation_ != _operation.Operation.Add) {
            row._grid_row_operation_ = _operation.Operation.Update;
          }
        });
        return row;
      });
    });
    setGridEditState(true);
    return newDefaultGridData;
  };

  var CheckBulkUpdateOnChangeCallBack = function CheckBulkUpdateOnChangeCallBack(data, defaultGridDataTmp) {
    var columns = [];

    for (var key in data) {
      var column = props.columns.filter(function (item) {
        return item.key == key;
      })[0];

      if (column.onChange) {
        columns.push(column);
      }
    }

    columns.forEach(function (column) {
      defaultGridDataTmp = CheckCellOnChangeCallBack(defaultGridDataTmp, selectedItems.map(function (item) {
        return item._grid_row_id_;
      }), column);
    });
    return defaultGridDataTmp;
  };

  var UpdateGridColumnData = function UpdateGridColumnData(data) {
    var defaultGridDataTmp = UpdateBulkData(data, defaultGridData);
    CloseColumnUpdateDialog();
    defaultGridDataTmp = CheckBulkUpdateOnChangeCallBack(data, defaultGridDataTmp);
    SetGridItems(defaultGridDataTmp);
  };

  var CloseColumnUpdateDialog = function CloseColumnUpdateDialog() {
    setIsUpdateColumnClicked(false);
  };

  var ShowColumnUpdate = function ShowColumnUpdate() {
    setIsUpdateColumnClicked(function (s) {
      return !s;
    });
  };
  /* #endregion */

  /* #region [Grid Row Add Functions] */


  var CloseRenameDialog = React.useCallback(function () {
    setDialogContent(undefined);
  }, []);

  var GetDefaultRowObject = function GetDefaultRowObject(rowCount) {
    var obj = {};
    var addedRows = [];

    var _new_grid_row_id_ = Math.max.apply(Math, defaultGridData.map(function (o) {
      return o._grid_row_id_;
    }));

    for (var i = 1; i <= rowCount; i++) {
      obj = {};
      props.columns.forEach(function (item, index) {
        obj[item.key] = (0, _helper.GetDefault)(item.dataType);
      });
      obj._grid_row_id_ = ++_new_grid_row_id_;
      obj._grid_row_operation_ = _operation.Operation.Add;
      obj._is_filtered_in_ = true;
      obj._is_filtered_in_grid_search_ = true;
      obj._is_filtered_in_column_filter_ = true;
      addedRows.push(obj);
    }

    return addedRows;
  };

  var AddRowsToGrid = function AddRowsToGrid() {
    var updateItemName = function updateItemName() {
      if (SpinRef && SpinRef.current.value) {
        setDialogContent(undefined);
        setAnnounced( /*#__PURE__*/React.createElement(_officeUiFabricReact.Announced, {
          message: "Rows Added",
          "aria-live": "assertive"
        }));
        var rowCount = parseInt(SpinRef.current.value, 10);
        var addedRows = GetDefaultRowObject(rowCount);
        var newGridData = [].concat(_toConsumableArray(defaultGridData), _toConsumableArray(addedRows));
        setGridEditState(true);
        SetGridItems(newGridData);
      }
    };

    setDialogContent( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_officeUiFabricReact.SpinButton, {
      componentRef: SpinRef,
      defaultValue: "0",
      label: 'Row Count:',
      min: 0,
      max: 100,
      step: 1,
      incrementButtonAriaLabel: 'Increase value by 1',
      decrementButtonAriaLabel: 'Decrease value by 1'
    }), /*#__PURE__*/React.createElement(_officeUiFabricReact.DialogFooter, null, /*#__PURE__*/React.createElement(_officeUiFabricReact.PrimaryButton // eslint-disable-next-line react/jsx-no-bind
    , {
      onClick: updateItemName,
      text: "Save"
    }))));
  };

  var onAddPanelChange = function onAddPanelChange(item, noOfRows) {
    dismissPanelForAdd();

    if (noOfRows < 1) {
      return;
    }

    var addedRows = GetDefaultRowObject(noOfRows);

    if (Object.keys(item).length > 0) {
      addedRows.map(function (row) {
        var objectKeys = Object.keys(item);
        objectKeys.forEach(function (key) {
          row[key] = item[key];
        });
        return row;
      });
    }

    var newGridData = _toConsumableArray(defaultGridData);

    addedRows.forEach(function (row, index) {
      return newGridData.splice(index, 0, row);
    });
    setGridEditState(true);
    SetGridItems(newGridData);
  };
  /* #endregion */

  /* #region [Grid Row Delete Functions] */


  var ShowMessageDialog = function ShowMessageDialog(message, subMessage) {
    setMessageDialogProps({
      visible: true,
      message: message,
      subMessage: subMessage
    });
  };

  var CloseMessageDialog = function CloseMessageDialog() {
    setMessageDialogProps({
      visible: false,
      message: '',
      subMessage: ''
    });
  };

  var DeleteSelectedRows = function DeleteSelectedRows() {
    var defaultGridDataTmp = _toConsumableArray(defaultGridData);

    selectedItems.forEach(function (item, index) {
      defaultGridDataTmp.filter(function (x) {
        return x._grid_row_id_ == item._grid_row_id_;
      }).map(function (x) {
        return x._grid_row_operation_ = _operation.Operation.Delete;
      });
    });
    setGridEditState(true);
    SetGridItems(defaultGridDataTmp);
  };
  /* #endregion */

  /* #region [Grid Export Functions] */


  var getExportableData = function getExportableData() {
    var exportableColumns = props.columns.filter(function (x) {
      return x.includeColumnInExport == true;
    });
    var exportableData = [];
    var exportableObj = {};

    if (!selectedItems || selectedItems.length == 0) {
      defaultGridData.filter(function (item) {
        return item._grid_row_operation_ != _operation.Operation.Delete && item._is_filtered_in_ && item._is_filtered_in_column_filter_ && item._is_filtered_in_grid_search_;
      }).forEach(function (item1, index1) {
        exportableColumns.forEach(function (item2, index2) {
          exportableObj[item2.text] = item1[item2.key];
        });
        exportableData.push(exportableObj);
        exportableObj = {};
      });
    } else {
      selectedItems.forEach(function (sel, index) {
        defaultGridData.filter(function (item) {
          return item._grid_row_operation_ != _operation.Operation.Delete && item._is_filtered_in_ && item._is_filtered_in_column_filter_ && item._is_filtered_in_grid_search_;
        }).forEach(function (item1, index1) {
          if (sel._grid_row_id_ == item1._grid_row_id_) {
            exportableColumns.forEach(function (item2, index2) {
              exportableObj[item2.text] = item1[item2.key];
            });
            exportableData.push(exportableObj);
            exportableObj = {};
          }
        });
      });
    }

    return exportableData;
  };

  var ExportToCSV = function ExportToCSV(dataRows, fileName) {
    if (!props.onExcelExport) {
      (0, _gridexportutil.ExportToCSVUtil)(dataRows, fileName);
    } else {
      props.onExcelExport(_exporttype.ExportType.CSV);
    }
  };

  var ExportToExcel = function ExportToExcel(dataRows, fileName) {
    if (!props.onExcelExport) {
      (0, _gridexportutil.ExportToExcelUtil)(dataRows, fileName);
    } else {
      props.onExcelExport(_exporttype.ExportType.XLSX);
    }
  };

  var onExportClick = function onExportClick(type) {
    var fileName = props.exportFileName != null && props.exportFileName.length > 0 ? props.exportFileName : 'ExcelExport';

    switch (type) {
      case _exporttype.ExportType.XLSX:
        ExportToExcel(getExportableData(), fileName + '.xlsx');
        break;

      case _exporttype.ExportType.CSV:
        ExportToCSV(getExportableData(), fileName + '.csv');
        break;
    }
  };
  /* #endregion */

  /* #region [Grid Cell Edit Functions] */


  var SaveSingleCellValue = function SaveSingleCellValue(key, rowNum, defaultGridDataArr) {
    var defaultGridDataTmp = [];
    defaultGridDataTmp = _toConsumableArray(defaultGridDataArr);
    var internalRowNumDefaultGrid = defaultGridDataTmp.findIndex(function (row) {
      return row._grid_row_id_ == rowNum;
    });
    var internalRowNumActivateGrid = activateCellEdit.findIndex(function (row) {
      return row['properties']['_grid_row_id_']['value'] == rowNum;
    });
    defaultGridDataTmp[internalRowNumDefaultGrid][key] = activateCellEdit[internalRowNumActivateGrid]['properties'][key]['value'];

    if (defaultGridDataTmp[internalRowNumDefaultGrid]['_grid_row_operation_'] != _operation.Operation.Add) {
      defaultGridDataTmp[internalRowNumDefaultGrid]['_grid_row_operation_'] = _operation.Operation.Update;
    }

    return defaultGridDataTmp;
  };

  var onCellValueChange = function onCellValueChange(ev, text, item, row, key, column) {
    if (!(0, _helper.IsValidDataType)(column.dataType, text)) {
      var _activateCellEditTmp = [];
      _activateCellEditTmp = _toConsumableArray(activateCellEdit);
      _activateCellEditTmp[row]['properties'][key]['error'] = "Value not '".concat(column.dataType, "'");
      setActivateCellEdit(_activateCellEditTmp);
      return;
    }

    setGridEditState(true);
    var activateCellEditTmp = [];
    activateCellEdit.forEach(function (item, index) {
      if (row == index) {
        item.properties[key].value = (0, _helper.ParseType)(column.dataType, text);
        item.properties[key].error = null;
      }

      activateCellEditTmp.push(item);
    });

    if (column.onChange) {
      HandleColumnOnChange(activateCellEditTmp, row, column);
    } //ShallowCopyEditGridToDefaultGrid(defaultGridData, activateCellEditTmp);


    setActivateCellEdit(activateCellEditTmp);
  };

  var CheckCellOnChangeCallBack = function CheckCellOnChangeCallBack(defaultGridDataTmp, row, column) {
    var callbackRequestparams = {
      data: defaultGridDataTmp,
      rowindex: row,
      triggerkey: column.key,
      activatetriggercell: false
    };

    var defaultGridBck = _toConsumableArray(defaultGridDataTmp);

    defaultGridDataTmp = column.onChange(callbackRequestparams);
    if (!defaultGridDataTmp) defaultGridDataTmp = defaultGridBck;
    return defaultGridDataTmp;
  };

  var onDoubleClickEvent = function onDoubleClickEvent(key, rowNum, activateCurrentCell) {
    EditCellValue(key, rowNum, activateCurrentCell);
  };

  var onCellPickerDoubleClickEvent = function onCellPickerDoubleClickEvent(key, rowNum, activateCurrentCell) {
    EditCellValue(key, rowNum, activateCurrentCell);
  };

  var onDropdownDoubleClickEvent = function onDropdownDoubleClickEvent(key, rowNum, activateCurrentCell) {
    EditCellValue(key, rowNum, activateCurrentCell);
  };

  var onKeyDownEvent = function onKeyDownEvent(event, column, rowNum, activateCurrentCell) {
    if (event.key == 'Enter') {
      if (!activateCellEdit[rowNum].isActivated) {
        EditCellValue(column.key, rowNum, activateCurrentCell);
        event.preventDefault();
      }
    }
  };

  var onCellDateChange = function onCellDateChange(date, item1, row, column) {
    setGridEditState(true);
    var activateCellEditTmp = [];
    activateCellEdit.forEach(function (item, index) {
      if (row == index) {
        item.properties[column.key].value = (0, _datepickerconfig.dateToISOLikeButLocal)(date);
      }

      activateCellEditTmp.push(item);
    });

    if (column.onChange) {
      HandleColumnOnChange(activateCellEditTmp, row, column);
    }

    setActivateCellEdit(activateCellEditTmp);
  };

  var onCellPickerTagListChanged = function onCellPickerTagListChanged(cellPickerTagList, row, column) {
    setGridEditState(true);
    var activateCellEditTmp = [];
    activateCellEdit.forEach(function (item, index) {
      if (row == index) {
        item.properties[column.key].value = '';

        if (cellPickerTagList && cellPickerTagList.length > 0) {
          cellPickerTagList.forEach(function (tag) {
            item.properties[column.key].value += tag.name + ';';
          });
        }

        var str = item.properties[column.key].value;
        item.properties[column.key].value = str.length > 0 ? str.substring(0, str.length - 1) : str;
      }

      activateCellEditTmp.push(item);
    });

    if (column.onChange) {
      HandleColumnOnChange(activateCellEditTmp, row, column);
    }

    setActivateCellEdit(activateCellEditTmp);
  };

  var onDropDownChange = function onDropDownChange(event, selectedDropdownItem, row, column) {
    setGridEditState(true);
    var activateCellEditTmp = [];
    activateCellEdit.forEach(function (item, index) {
      if (row == index) {
        item.properties[column.key].value = selectedDropdownItem === null || selectedDropdownItem === void 0 ? void 0 : selectedDropdownItem.text;
      }

      activateCellEditTmp.push(item);
    });

    if (column.onChange) {
      HandleColumnOnChange(activateCellEditTmp, row, column);
    }

    setActivateCellEdit(activateCellEditTmp);
  };

  var onCheckboxChange = function onCheckboxChange(value, row, column) {
    setGridEditState(true);
    var activateCellEditTmp = [];
    activateCellEdit.forEach(function (item, index) {
      if (row == index) {
        item.properties[column.key].value = value === 1 ? 0 : 1;
      }

      activateCellEditTmp.push(item);
    });

    if (column.onChange) {
      HandleColumnOnChange(activateCellEditTmp, row, column);
    }

    setActivateCellEdit(activateCellEditTmp);
  };

  var ChangeCellState = function ChangeCellState(key, rowNum, activateCurrentCell, activateCellEditArr) {
    var activateCellEditTmp = [];
    activateCellEditTmp = _toConsumableArray(activateCellEditArr);
    activateCellEditTmp[rowNum]['properties'][key]['activated'] = activateCurrentCell;
    activateCellEditTmp[rowNum]['properties'][key]['error'] = !activateCurrentCell ? null : activateCellEditTmp[rowNum]['properties'][key]['error'];
    return activateCellEditTmp;
  };

  var EditCellValue = function EditCellValue(key, rowNum, activateCurrentCell) {
    var activateCellEditTmp = ChangeCellState(key, rowNum, activateCurrentCell, activateCellEdit);
    setActivateCellEdit(activateCellEditTmp);

    if (!activateCurrentCell) {
      var defaultGridDataTmp = SaveSingleCellValue(key, rowNum, defaultGridData);
      setDefaultGridData(defaultGridDataTmp);
    }
  };

  var HandleColumnOnChange = function HandleColumnOnChange(activateCellEditTmp, row, column) {
    var arr = [];
    activateCellEditTmp.forEach(function (item, index) {
      var rowObj = {};
      var objectKeys = Object.keys(item.properties);
      objectKeys.forEach(function (objKey) {
        rowObj[objKey] = item.properties[objKey].value;
      });
      arr.push(rowObj);
    });
    var defaultGridDataTmp = CheckCellOnChangeCallBack(arr, [row], column);
    setDefaultGridData(defaultGridDataTmp);
    activateCellEditTmp = (0, _editablegridinitialize.ShallowCopyDefaultGridToEditGrid)(defaultGridDataTmp, activateCellEditTmp);
  };
  /* #endregion */

  /* #region [Grid Row Edit Functions] */


  var ChangeRowState = function ChangeRowState(item, rowNum, enableTextField) {
    var activateCellEditTmp = _toConsumableArray(activateCellEdit);

    var objectKeys = Object.keys(item);
    objectKeys.filter(function (key) {
      return key != '_grid_row_id_' && key != '_grid_row_operation_';
    }).forEach(function (objKey) {
      activateCellEditTmp = ChangeCellState(objKey, rowNum, enableTextField, activateCellEditTmp);
    });
    activateCellEditTmp[rowNum]['isActivated'] = enableTextField;
    return activateCellEditTmp;
  };

  var SaveRowValue = function SaveRowValue(item, rowNum, defaultGridDataArr) {
    var defaultGridDataTmp = [];
    defaultGridDataTmp = _toConsumableArray(defaultGridDataArr);
    var objectKeys = Object.keys(item);
    objectKeys.filter(function (key) {
      return key != '_grid_row_id_' && key != '_grid_row_operation_';
    }).forEach(function (objKey) {
      //defaultGridDataTmp[rowNum][objKey] = activateCellEdit[rowNum]['properties'][objKey]['value'];
      defaultGridDataTmp = SaveSingleCellValue(objKey, rowNum, defaultGridData);
    });
    return defaultGridDataTmp;
  };

  var ShowRowEditMode = function ShowRowEditMode(item, rowNum, enableTextField) {
    if (enableTextField) {
      setCancellableRows(function (cancellableRows) {
        return [].concat(_toConsumableArray(cancellableRows), [item]);
      });
    } else {
      setCancellableRows(cancellableRows.filter(function (row) {
        return row._grid_row_id_ != item._grid_row_id_;
      }));
    }

    var activateCellEditTmp = ChangeRowState(item, rowNum, enableTextField);
    setActivateCellEdit(activateCellEditTmp);

    if (!enableTextField) {
      var defaultGridDataTmp = SaveRowValue(item, rowNum, defaultGridData);
      setDefaultGridData(defaultGridDataTmp);
    }
  }; // const CancelRowEditMode = (item : any, rowNum : number) : void => {
  //     debugger;
  //     // SetGridItems(defaultGridData);
  //     let activateCellEditTmp : any[] = ChangeRowState(item, rowNum, false);
  //     activateCellEditTmp = RevertRowEditValues(rowNum, activateCellEditTmp);
  //     setActivateCellEdit(activateCellEditTmp);
  //     setDefaultGridData(defaultGridData);
  // }


  var CancelRowEditMode = function CancelRowEditMode(item, rowNum) {
    // SetGridItems(defaultGridData);
    var activateCellEditTmp = ChangeRowState(item, rowNum, false);
    activateCellEditTmp = RevertRowEditValues(rowNum, activateCellEditTmp);
    setActivateCellEdit(activateCellEditTmp); //setDefaultGridData(defaultGridData);

    setDefaultGridData((0, _editablegridinitialize.ShallowCopyEditGridToDefaultGrid)(defaultGridData, activateCellEditTmp));
  };

  var RevertRowEditValues = function RevertRowEditValues(rowNum, activateCellEditArr) {
    var activateCellEditTmp = _toConsumableArray(activateCellEditArr); //var baseRow = defaultGridData.filter(x => x._grid_row_id_ == rowNum)[0];


    var baseRow = cancellableRows.filter(function (x) {
      return x._grid_row_id_ == rowNum;
    })[0];
    var objectKeys = Object.keys(baseRow);
    var targetRow = activateCellEditTmp.filter(function (x) {
      return x.properties['_grid_row_id_'].value == rowNum;
    })[0];
    objectKeys.forEach(function (objKey) {
      if ([objKey != '_grid_row_id_']) {
        targetRow['properties'][objKey]['value'] = baseRow[objKey];
      }
    });
    setCancellableRows(cancellableRows.filter(function (row) {
      return row._grid_row_id_ != rowNum;
    }));
    return activateCellEditTmp;
  };
  /* #endregion */

  /* #region [Grid Edit Mode Functions] */


  var ShowGridEditMode = function ShowGridEditMode() {
    var newEditModeValue = !editMode;

    if (newEditModeValue) {
      setCancellableRows(defaultGridData);
    } else {
      setCancellableRows([]);
    }

    var activateCellEditTmp = [];
    var defaultGridDataTmp = [];
    defaultGridData.forEach(function (item, rowNum) {
      activateCellEditTmp = ChangeRowState(item, item['_grid_row_id_'], newEditModeValue);
    });
    setActivateCellEdit(activateCellEditTmp);

    if (!newEditModeValue) {
      defaultGridData.forEach(function (item, rowNum) {
        defaultGridDataTmp = SaveRowValue(item, item['_grid_row_id_'], defaultGridData);
      });
      setDefaultGridData(defaultGridDataTmp);
    }

    setEditMode(newEditModeValue);
  };

  var CancelGridEditMode = function CancelGridEditMode() {
    SetGridItems(cancellableRows);
    setCancellableRows([]);
    setEditMode(false);
  };
  /* #endregion */

  /* #region [Grid Copy Functions] */


  var CopyGridRows = function CopyGridRows() {
    if (selectedIndices.length == 0) {
      ShowMessageDialog('No Rows Selected', 'Please select some rows to perform this operation');
      return;
    }

    var copyText = '';
    selectedItems.forEach(function (i) {
      copyText += (0, _helper.ConvertObjectToText)(defaultGridData.filter(function (x) {
        return x['_grid_row_id_'] == i['_grid_row_id_'];
      })[0], props.columns) + '\r\n';
    });
    navigator.clipboard.writeText(copyText).then(function () {
      if (props.onGridStatusMessageCallback) props.onGridStatusMessageCallback(selectedIndices.length + " ".concat(selectedIndices.length == 1 ? 'row' : 'rows', " copied to clipboard"));
    }, function () {
      /* clipboard write failed */
    });
  };

  var HandleRowCopy = function HandleRowCopy(rowNum) {
    navigator.clipboard.writeText((0, _helper.ConvertObjectToText)(defaultGridData[rowNum], props.columns)).then(function () {
      if (props.onGridStatusMessageCallback) props.onGridStatusMessageCallback('1 row copied to clipboard');
    }, function () {
      /* clipboard write failed */
    });
  };
  /* #endregion */


  var RowSelectOperations = function RowSelectOperations(type, item) {
    switch (type) {
      case _edittype.EditType.BulkEdit:
        if (selectedIndices.length > 0) {
          setIsOpenForEdit(true);
        } else {
          ShowMessageDialog('No Rows Selected', 'Please select some rows to perform this operation');
        }

        break;

      case _edittype.EditType.ColumnEdit:
        if (selectedIndices.length > 0) {
          ShowColumnUpdate();
        } else {
          ShowMessageDialog('No Rows Selected', 'Please select some rows to perform this operation');
          return false;
        }

        break;

      case _edittype.EditType.AddRow:
        AddRowsToGrid(); //toggleHideDialog;

        break;

      case _edittype.EditType.DeleteRow:
        if (selectedIndices.length > 0) {
          DeleteSelectedRows();
        } else {
          ShowMessageDialog('No Rows Selected', 'Please select some rows to perform this operation');
        }

        break;

      case _edittype.EditType.ColumnFilter:
        ShowColumnFilterDialog();
        break;

      case _edittype.EditType.AddRowWithData:
        setIsOpenForAdd(true);
        break;
    }

    return true;
  };

  var ResetGridData = function ResetGridData() {
    setGridEditState(false);
    ClearFilters();
    SetGridItems(backupDefaultGridData.map(function (obj) {
      return _objectSpread({}, obj);
    }));
  };
  /* #region [Column Click] */


  var onColumnClick = function onColumnClick(ev, column, index) {
    ev.preventDefault();
    ShowFilterForColumn(column, index);
  };

  var onColumnContextMenu = function onColumnContextMenu(column, ev) {
    //ev!.preventDefault();
    var newColumns = GridColumns.slice();
    var currColumn = newColumns.filter(function (currCol) {
      return column.key === currCol.key;
    })[0];
    newColumns.forEach(function (newCol) {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });

    var newItems = _copyAndSort(defaultGridData, currColumn.fieldName, currColumn.isSortedDescending);

    SetGridItems(newItems);
    setSortColObj({
      key: column.key,
      isAscending: !currColumn.isSortedDescending,
      isEnabled: true
    });
  };

  function _copyAndSort(items, columnKey, isSortedDescending) {
    var key = columnKey;
    return items.slice(0).sort(function (a, b) {
      return (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1;
    });
  }
  /* #endregion */

  /* #region [Column Filter] */


  var getFilterStoreRef = function getFilterStoreRef() {
    return filterStoreRef.current;
  };

  var setFilterStoreRef = function setFilterStoreRef(value) {
    filterStoreRef.current = value;
  };

  var clearFilterStoreRef = function clearFilterStoreRef() {
    filterStoreRef.current = [];
  };

  var CloseColumnFilterDialog = function CloseColumnFilterDialog() {
    setIsColumnFilterClicked(false);
  };

  var ShowColumnFilterDialog = function ShowColumnFilterDialog() {
    setIsColumnFilterClicked(function (s) {
      return !s;
    });
  };

  var onFilterApplied = function onFilterApplied(filter) {
    var tags = _toConsumableArray(defaultTag);

    tags.push({
      name: "'" + filter.column.key + "' " + filter.operator + ' ' + "'" + filter.value + "'",
      key: filter.column.key
    });
    var filterStoreTmp = getFilterStoreRef();
    filterStoreTmp.push(filter);
    setFilterStoreRef(filterStoreTmp);
    setFilteredColumns(function (filteredColumns) {
      return [].concat(_toConsumableArray(filteredColumns), [filter.column]);
    });
    setDefaultTag(tags);
    CloseColumnFilterDialog();
  };

  var ClearFilters = function ClearFilters() {
    setDefaultTag([]);
    clearFilterStoreRef();
    setFilteredColumns([]);
  };

  var onFilterTagListChanged = React.useCallback(function (tagList) {
    if (tagList != null && tagList.length == 0) {
      ClearFilters();
      return;
    }

    var filterStoreTmp = [];
    tagList.forEach(function (item) {
      var storeRow = getFilterStoreRef().filter(function (val) {
        return val.column.key == item.key;
      });

      if (storeRow.length > 0) {
        filterStoreTmp.push(storeRow[0]);
      }
    });
    setFilterStoreRef(filterStoreTmp);
    var filteredColumnsTmp = [];
    filteredColumnsTmp = props.columns.filter(function (item) {
      return tagList.filter(function (val) {
        return val.key == item.key;
      }).length > 0;
    });
    setFilteredColumns(filteredColumnsTmp);
    setDefaultTag(tagList);
  }, []);
  var onFilterChanged = React.useCallback(function (filterText, tagList) {
    var emptyITag = [];
    return emptyITag;
  }, []);

  var getTextFromItem = function getTextFromItem(item) {
    return item.name;
  };

  var pickerSuggestionsProps = {
    suggestionsHeaderText: 'Suggested tags',
    noResultsFoundText: 'No item tags found'
  };
  var inputProps = {
    'aria-label': 'Tag Picker'
  };
  /* #endregion [Column Filter] */

  /* #region [Grid Column Filter] */

  var onFilterApply = function onFilterApply(filter) {
    UpdateColumnFilterValues(filter);
    var GridColumnFilterArr = getColumnFiltersRef();
    var filteredData = (0, _helper.applyGridColumnFilter)(defaultGridData, GridColumnFilterArr);
    getColumnFiltersRefForColumnKey(filter.columnKey).isApplied = filter.filterList.filter(function (i) {
      return i.isChecked;
    }).length > 0 && filter.filterList.filter(function (i) {
      return i.isChecked;
    }).length < filter.filterList.length ? true : false;
    var activateCellEditTmp = (0, _editablegridinitialize.ShallowCopyDefaultGridToEditGrid)(defaultGridData, activateCellEdit);
    setDefaultGridData(filteredData);
    setActivateCellEdit(activateCellEditTmp);
    setGridData(filteredData);
    setFilterCalloutComponent(undefined);
  };

  var UpdateColumnFilterValues = function UpdateColumnFilterValues(filter) {
    var gridColumnFilter = getColumnFiltersRefForColumnKey(filter.columnKey);
    gridColumnFilter.filterCalloutProps.filterList = filter.filterList;
    gridColumnFilter.isHidden = true;
    gridColumnFilter.isApplied = true;
  };

  var ShowFilterForColumn = function ShowFilterForColumn(column, index) {
    var filter = getColumnFiltersRefAtIndex(index);
    filter.isHidden = !filter.isHidden;

    if (filter.isHidden) {
      setFilterCalloutComponent(undefined);
      return;
    }

    var filters = getColumnFiltersRef();
    filters.filter(function (item) {
      return item.index != filter.index && item.column.key != filter.column.key;
    }).map(function (item) {
      return item.isHidden = true;
    });
    filter.filterCalloutProps.filterList = GetUniqueColumnValues(column, filter.filterCalloutProps.filterList);
    setFilterCalloutComponent( /*#__PURE__*/React.createElement(_filtercallout["default"], {
      onCancel: function onCancel() {
        setFilterCalloutComponent(undefined);
      },
      onApply: onFilterApply,
      columnKey: filter.filterCalloutProps.columnKey,
      columnName: filter.filterCalloutProps.columnName,
      filterList: filter.filterCalloutProps.filterList,
      columnClass: filter.filterCalloutProps.columnClass
    }));
  };

  var GetUniqueColumnValues = function GetUniqueColumnValues(column, prevFilters) {
    var uniqueVals = _toConsumableArray(new Set(defaultGridData.filter(function (x) {
      return x._grid_row_operation_ != _operation.Operation.Delete && x._is_filtered_in_column_filter_ == true && x._is_filtered_in_grid_search_ == true;
    }).map(function (item) {
      return item[column.fieldName];
    })));

    var hiddenUniqueVals = _toConsumableArray(new Set(defaultGridData.filter(function (x) {
      return x._grid_row_operation_ != _operation.Operation.Delete && (x._is_filtered_in_column_filter_ == false || x._is_filtered_in_grid_search_ == false);
    }).map(function (item) {
      return item[column.fieldName];
    })));

    var filterItemArr = [];

    if (!prevFilters || prevFilters.length == 0) {
      filterItemArr = uniqueVals.map(function (item) {
        return {
          text: item,
          isChecked: true
        };
      });
    } else {
      filterItemArr = uniqueVals.map(function (item) {
        var filters = prevFilters.filter(function (i) {
          return i.text == item;
        });
        return {
          text: item,
          isChecked: filters.length > 0 ? filters[0].isChecked : true
        };
      });
    }

    return [].concat(_toConsumableArray(filterItemArr), _toConsumableArray(hiddenUniqueVals.filter(function (i) {
      return !uniqueVals.includes(i);
    }).map(function (i) {
      return {
        text: i,
        isChecked: false
      };
    })));
  };

  var getColumnFiltersRef = function getColumnFiltersRef() {
    return gridColumnFilterArrRef.current;
  };

  var getColumnFiltersRefAtIndex = function getColumnFiltersRefAtIndex(index) {
    return gridColumnFilterArrRef.current[index];
  };

  var getColumnFiltersRefForColumnKey = function getColumnFiltersRefForColumnKey(key) {
    var gridColumnFilterArr = _toConsumableArray(gridColumnFilterArrRef.current);

    return gridColumnFilterArr.filter(function (item) {
      return item.column.key == key;
    })[0];
  };

  var setColumnFiltersRefAtIndex = function setColumnFiltersRefAtIndex(index, filter) {
    gridColumnFilterArrRef.current[index] = filter;
  };

  var setColumnFiltersRef = function setColumnFiltersRef(value) {
    gridColumnFilterArrRef.current = value;
  };

  var clearColumnFiltersRef = function clearColumnFiltersRef() {
    gridColumnFilterArrRef.current = [];
  };
  /* #endregion [Grid Column Filter] */


  var CreateColumnConfigs = function CreateColumnConfigs() {
    var columnConfigs = [];
    var columnFilterArrTmp = [];
    props.columns.forEach(function (column, index) {
      var colHeaderClassName = 'id-' + props.id + '-col-' + index;
      var colKey = 'col' + index;
      var isDataTypeSupportedForFilter = (0, _helper.isColumnDataTypeSupportedForFilter)(column.dataType);
      columnConfigs.push({
        key: colKey,
        name: column.text,
        headerClassName: colHeaderClassName,
        ariaLabel: column.text,
        fieldName: column.key,
        isResizable: true,
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        onColumnContextMenu: !column.disableSort && !(isGridInEdit || editMode) ? function (col, ev) {
          return onColumnContextMenu(col, ev);
        } : undefined,
        onColumnClick: !(isGridInEdit || editMode) && isDataTypeSupportedForFilter && column.applyColumnFilter && props.enableColumnFilters ? function (ev, col) {
          return onColumnClick(ev, col, index);
        } : undefined,
        //data: item.dataType,
        isSorted: sortColObj.isEnabled && sortColObj.key == colKey,
        isSortedDescending: !(sortColObj.isEnabled && sortColObj.key == colKey) || !sortColObj.isAscending,
        isFiltered: isDataTypeSupportedForFilter && column.applyColumnFilter && props.enableColumnFilters && getColumnFiltersRef() && getColumnFiltersRef().length > 0 && getColumnFiltersRef().filter(function (i) {
          return i.column.key == column.key;
        }).length > 0 && getColumnFiltersRef().filter(function (i) {
          return i.column.key == column.key;
        })[0].isApplied ? true : false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onRender: column.onRender ? column.onRender : function (item, rowNum) {
          var _column$hoverComponen, _column$hoverComponen2, _column$hoverComponen3, _column$dropdownValue, _column$dropdownValue2, _column$dropdownValue3, _column$dropdownValue4, _column$hoverComponen4, _column$pickerOptions, _column$pickerOptions2, _column$pickerOptions3, _column$pickerOptions4, _column$pickerOptions5, _column$pickerOptions6, _column$hoverComponen5, _column$hoverComponen6, _activateCellEdit;

          rowNum = Number(item['_grid_row_id_']);

          switch (column.inputType) {
            case _editcontroltype.EditControlType.MultilineTextField:
              return /*#__PURE__*/React.createElement("span", null, ShouldRenderSpan() ? column !== null && column !== void 0 && (_column$hoverComponen = column.hoverComponentOptions) !== null && _column$hoverComponen !== void 0 && _column$hoverComponen.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderMultilineTextFieldSpan(props, index, rowNum, column, item, EditCellValue)) : RenderMultilineTextFieldSpan(props, index, rowNum, column, item, EditCellValue) : /*#__PURE__*/React.createElement(_TextField.TextField, {
                errorMessage: activateCellEdit[rowNum]['properties'][column.key].error,
                label: item.text,
                ariaLabel: column.key,
                multiline: true,
                rows: 1,
                styles: _editablegridstyles.textFieldStyles,
                onChange: function onChange(ev, text) {
                  return onCellValueChange(ev, text, item, rowNum, column.key, column);
                },
                autoFocus: !props.enableDefaultEditMode && !editMode && !(activateCellEdit && activateCellEdit[Number(item['_grid_row_id_'])] && activateCellEdit[Number(item['_grid_row_id_'])]['isActivated']),
                value: activateCellEdit[rowNum]['properties'][column.key].value,
                onDoubleClick: function onDoubleClick() {
                  return !activateCellEdit[rowNum].isActivated ? onDoubleClickEvent(column.key, rowNum, false) : null;
                },
                maxLength: column.maxLength != null ? column.maxLength : 10000
              }));
              break;

            case _editcontroltype.EditControlType.Date:
              return /*#__PURE__*/React.createElement("span", null, ShouldRenderSpan() ? column !== null && column !== void 0 && (_column$hoverComponen2 = column.hoverComponentOptions) !== null && _column$hoverComponen2 !== void 0 && _column$hoverComponen2.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderDateSpan(props, index, rowNum, column, item, EditCellValue)) : RenderDateSpan(props, index, rowNum, column, item, EditCellValue) : /*#__PURE__*/React.createElement(_officeUiFabricReact.DatePicker, {
                strings: _datepickerconfig.DayPickerStrings,
                placeholder: "Select a date...",
                ariaLabel: column.key,
                formatDate: column.dateFormater,
                value: new Date(activateCellEdit[rowNum].properties[column.key].value),
                onSelectDate: function onSelectDate(date) {
                  return onCellDateChange(date, item, rowNum, column);
                },
                onDoubleClick: function onDoubleClick() {
                  return !activateCellEdit[rowNum].isActivated ? onDoubleClickEvent(column.key, rowNum, false) : null;
                }
              }));
              break;

            case _editcontroltype.EditControlType.DropDown:
              return /*#__PURE__*/React.createElement("span", {
                className: 'row-' + rowNum + '-col-' + index
              }, ShouldRenderSpan() ? column !== null && column !== void 0 && (_column$hoverComponen3 = column.hoverComponentOptions) !== null && _column$hoverComponen3 !== void 0 && _column$hoverComponen3.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderDropdownSpan(props, index, rowNum, column, item, EditCellValue)) : RenderDropdownSpan(props, index, rowNum, column, item, EditCellValue) : /*#__PURE__*/React.createElement(_officeUiFabricReact.Dropdown, {
                ariaLabel: column.key,
                placeholder: (_column$dropdownValue = (_column$dropdownValue2 = column.dropdownValues) === null || _column$dropdownValue2 === void 0 ? void 0 : (_column$dropdownValue3 = _column$dropdownValue2.filter(function (x) {
                  return x.text == item[column.key];
                })[0]) === null || _column$dropdownValue3 === void 0 ? void 0 : _column$dropdownValue3.text) !== null && _column$dropdownValue !== void 0 ? _column$dropdownValue : 'Select an option',
                options: (_column$dropdownValue4 = column.dropdownValues) !== null && _column$dropdownValue4 !== void 0 ? _column$dropdownValue4 : [],
                styles: _editablegridstyles.dropdownStyles,
                onChange: function onChange(ev, selectedItem) {
                  return onDropDownChange(ev, selectedItem, rowNum, column);
                },
                onDoubleClick: function onDoubleClick() {
                  return !activateCellEdit[rowNum].isActivated ? onDropdownDoubleClickEvent(column.key, rowNum, false) : null;
                }
              }));
              break;

            case _editcontroltype.EditControlType.Picker:
              return /*#__PURE__*/React.createElement("span", null, ShouldRenderSpan() ? column !== null && column !== void 0 && (_column$hoverComponen4 = column.hoverComponentOptions) !== null && _column$hoverComponen4 !== void 0 && _column$hoverComponen4.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderPickerSpan(props, index, rowNum, column, item, EditCellValue)) : RenderPickerSpan(props, index, rowNum, column, item, EditCellValue) : /*#__PURE__*/React.createElement("span", {
                onDoubleClick: function onDoubleClick() {
                  return !activateCellEdit[rowNum].isActivated ? onCellPickerDoubleClickEvent(column.key, rowNum, false) : null;
                }
              }, /*#__PURE__*/React.createElement(_picker["default"], {
                arialabel: column.key,
                selectedItemsLimit: (_column$pickerOptions = column.pickerOptions) === null || _column$pickerOptions === void 0 ? void 0 : _column$pickerOptions.tagsLimit,
                pickerTags: (_column$pickerOptions2 = (_column$pickerOptions3 = column.pickerOptions) === null || _column$pickerOptions3 === void 0 ? void 0 : _column$pickerOptions3.pickerTags) !== null && _column$pickerOptions2 !== void 0 ? _column$pickerOptions2 : [],
                defaultTags: item[column.key] ? item[column.key].split(';') : [],
                minCharLimitForSuggestions: (_column$pickerOptions4 = column.pickerOptions) === null || _column$pickerOptions4 === void 0 ? void 0 : _column$pickerOptions4.minCharLimitForSuggestions,
                onTaglistChanged: function onTaglistChanged(selectedItem) {
                  return onCellPickerTagListChanged(selectedItem, rowNum, column);
                },
                pickerDescriptionOptions: (_column$pickerOptions5 = column.pickerOptions) === null || _column$pickerOptions5 === void 0 ? void 0 : _column$pickerOptions5.pickerDescriptionOptions,
                suggestionRule: (_column$pickerOptions6 = column.pickerOptions) === null || _column$pickerOptions6 === void 0 ? void 0 : _column$pickerOptions6.suggestionsRule
              })));
              break;

            case _editcontroltype.EditControlType.Link:
              return /*#__PURE__*/React.createElement("span", null, column !== null && column !== void 0 && (_column$hoverComponen5 = column.hoverComponentOptions) !== null && _column$hoverComponen5 !== void 0 && _column$hoverComponen5.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderLinkSpan(props, index, rowNum, column, item, EditCellValue)) : RenderLinkSpan(props, index, rowNum, column, item, EditCellValue));

            case _editcontroltype.EditControlType.Checkbox:
              return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_officeUiFabricReact.Checkbox, {
                defaultChecked: item[column.key] === 1,
                onChange: function onChange(ev, checked) {
                  onCheckboxChange(item[column.key], rowNum, column);
                },
                disabled: !props.enableDefaultEditMode && !editMode && !(activateCellEdit && activateCellEdit[Number(item['_grid_row_id_'])] && activateCellEdit[Number(item['_grid_row_id_'])]['isActivated'])
              }));

            default:
              return /*#__PURE__*/React.createElement("span", null, ShouldRenderSpan() ? column !== null && column !== void 0 && (_column$hoverComponen6 = column.hoverComponentOptions) !== null && _column$hoverComponen6 !== void 0 && _column$hoverComponen6.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.HoverCard, {
                type: _officeUiFabricReact.HoverCardType.plain,
                plainCardProps: {
                  onRenderPlainCard: function onRenderPlainCard() {
                    return _onRenderPlainCard(column, rowNum, item);
                  }
                },
                instantOpenOnClick: true
              }, RenderTextFieldSpan(props, index, rowNum, column, item, EditCellValue)) : RenderTextFieldSpan(props, index, rowNum, column, item, EditCellValue) : /*#__PURE__*/React.createElement(_TextField.TextField, {
                errorMessage: activateCellEdit[rowNum]['properties'][column.key].error,
                label: item.text,
                ariaLabel: column.key,
                styles: _editablegridstyles.textFieldStyles,
                onChange: function onChange(ev, text) {
                  return onCellValueChange(ev, text, item, rowNum, column.key, column);
                },
                autoFocus: !props.enableDefaultEditMode && !editMode && !(activateCellEdit !== null && activateCellEdit !== void 0 && (_activateCellEdit = activateCellEdit[Number(item['_grid_row_id_'])]) !== null && _activateCellEdit !== void 0 && _activateCellEdit['isActivated']),
                value: activateCellEdit[rowNum]['properties'][column.key].value,
                onKeyDown: function onKeyDown(event) {
                  return onKeyDownEvent(event, column, rowNum, false);
                },
                maxLength: column.maxLength != null ? column.maxLength : 1000
              }));
          }

          function ShouldRenderSpan() {
            var _activateCellEdit2, _activateCellEdit3, _activateCellEdit3$pr;

            return !column.editable || !props.enableDefaultEditMode && !(activateCellEdit !== null && activateCellEdit !== void 0 && (_activateCellEdit2 = activateCellEdit[rowNum]) !== null && _activateCellEdit2 !== void 0 && _activateCellEdit2.isActivated) && !(activateCellEdit !== null && activateCellEdit !== void 0 && (_activateCellEdit3 = activateCellEdit[rowNum]) !== null && _activateCellEdit3 !== void 0 && (_activateCellEdit3$pr = _activateCellEdit3['properties'][column.key]) !== null && _activateCellEdit3$pr !== void 0 && _activateCellEdit3$pr.activated);
          }
        }
      });

      if (getColumnFiltersRef().length == 0) {
        columnFilterArrTmp.push({
          index: index,
          column: column,
          isApplied: false,
          isHidden: true,
          filterCalloutProps: {
            columnKey: column.key,
            columnClass: colHeaderClassName,
            columnName: column.text,
            filterList: []
          }
        });
      }
    });

    if (getColumnFiltersRef().length == 0) {
      setColumnFiltersRef(columnFilterArrTmp);
    }

    if (props.enableRowEdit) {
      columnConfigs.push({
        key: 'action',
        name: 'Actions',
        ariaLabel: 'Actions',
        fieldName: 'action',
        isResizable: true,
        minWidth: 50,
        maxWidth: 50,
        onRender: function onRender(item, index) {
          return /*#__PURE__*/React.createElement("div", null, activateCellEdit && activateCellEdit[Number(item['_grid_row_id_'])] && activateCellEdit[Number(item['_grid_row_id_'])]['isActivated'] ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_IconButton.IconButton, {
            disabled: editMode,
            onClick: function onClick() {
              return ShowRowEditMode(item, Number(item['_grid_row_id_']), false);
            },
            iconProps: {
              iconName: 'Save'
            },
            title: 'Save'
          }), props.enableRowEditCancel ? /*#__PURE__*/React.createElement(_IconButton.IconButton, {
            disabled: editMode,
            onClick: function onClick() {
              return CancelRowEditMode(item, Number(item['_grid_row_id_']));
            },
            iconProps: {
              iconName: 'RemoveFilter'
            },
            title: 'Cancel'
          }) : null) : /*#__PURE__*/React.createElement("div", null, !props.enableDefaultEditMode && /*#__PURE__*/React.createElement(_IconButton.IconButton, {
            onClick: function onClick() {
              return ShowRowEditMode(item, Number(item['_grid_row_id_']), true);
            },
            iconProps: {
              iconName: 'Edit'
            },
            title: 'Edit'
          }), props.gridCopyOptions && props.gridCopyOptions.enableRowCopy && /*#__PURE__*/React.createElement(_IconButton.IconButton, {
            onClick: function onClick() {
              return HandleRowCopy(Number(item['_grid_row_id_']));
            },
            iconProps: {
              iconName: 'Copy'
            },
            title: 'Copy'
          })));
        }
      });
    }

    return columnConfigs;
  };

  var CreateCommandBarItemProps = function CreateCommandBarItemProps() {
    var commandBarItems = [];

    if (props.enableExport) {
      commandBarItems.push({
        id: 'export',
        key: 'exportGrid',
        text: 'Export',
        ariaLabel: 'Export',
        disabled: isGridInEdit || editMode,
        cacheKey: 'myCacheKey',
        iconProps: {
          iconName: 'Download'
        },
        subMenuProps: {
          items: [{
            key: 'exportToExcel',
            text: 'Excel Export',
            iconProps: {
              iconName: 'ExcelDocument'
            },
            onClick: function onClick() {
              return onExportClick(_exporttype.ExportType.XLSX);
            }
          }, {
            key: 'exportToCSV',
            text: 'CSV Export',
            iconProps: {
              iconName: 'LandscapeOrientation'
            },
            onClick: function onClick() {
              return onExportClick(_exporttype.ExportType.CSV);
            }
          }]
        }
      });
    }

    if (props.enableColumnFilterRules) {
      commandBarItems.push({
        id: 'columnfilter',
        key: 'columnFilters',
        text: 'Filter',
        ariaLabel: 'Filter',
        disabled: isGridInEdit || editMode,
        cacheKey: 'myColumnFilterCacheKey',
        iconProps: {
          iconName: 'Filter'
        },
        subMenuProps: {
          items: [{
            key: 'columnFilter',
            text: 'Column Filter',
            iconProps: {
              iconName: 'Filter'
            },
            onClick: function onClick() {
              return RowSelectOperations(_edittype.EditType.ColumnFilter, {});
            }
          }, {
            key: 'clearFilters',
            text: 'Clear Filters',
            iconProps: {
              iconName: 'ClearFilter'
            },
            onClick: function onClick() {
              return ClearFilters();
            }
          }]
        }
      });
    }

    if (!props.enableDefaultEditMode && props.enableTextFieldEditMode) {
      commandBarItems.push({
        id: 'editmode',
        key: 'editmode',
        disabled: isGridInEdit && !editMode,
        text: !editMode ? 'Edit Mode' : 'Save Edits',
        iconProps: {
          iconName: !editMode ? 'Edit' : 'Save'
        },
        onClick: function onClick() {
          return ShowGridEditMode();
        }
      });
    }

    if (!props.enableDefaultEditMode && props.enableTextFieldEditModeCancel && editMode) {
      commandBarItems.push({
        key: 'editmodecancel',
        disabled: isGridInEdit && !editMode,
        text: 'Cancel',
        iconProps: {
          iconName: 'Cancel'
        },
        //onClick: () => {SetGridItems(defaultGridData); setEditMode(false)}
        onClick: function onClick() {
          CancelGridEditMode();
        }
      });
    }

    if (props.enableSave == true) {
      commandBarItems.push({
        id: 'submit',
        key: 'submit',
        text: 'Submit',
        ariaLabel: 'Submit',
        disabled: isGridInEdit || !isGridStateEdited,
        iconProps: {
          iconName: 'Save'
        },
        onClick: function onClick() {
          return onGridSave();
        }
      });
    }

    if (props.enableBulkEdit) {
      commandBarItems.push({
        id: 'bulkedit',
        key: 'bulkedit',
        text: 'Bulk Edit',
        disabled: isGridInEdit || editMode || selectionCount == 0,
        iconProps: {
          iconName: 'TripleColumnEdit'
        },
        onClick: function onClick() {
          return RowSelectOperations(_edittype.EditType.BulkEdit, {});
        }
      });
    }

    if (props.gridCopyOptions && props.gridCopyOptions.enableGridCopy) {
      commandBarItems.push({
        key: 'copy',
        text: 'Copy',
        disabled: isGridInEdit || editMode || selectionCount == 0,
        iconProps: {
          iconName: 'Copy'
        },
        onClick: function onClick() {
          return CopyGridRows();
        }
      });
    }

    if (props.enableGridRowsAdd) {
      commandBarItems.push({
        id: 'addrows',
        key: 'addrows',
        text: 'Add Rows',
        disabled: isGridInEdit || editMode,
        iconProps: {
          iconName: 'AddTo'
        },
        onClick: function onClick() {
          return RowSelectOperations(_edittype.EditType.AddRow, {});
        }
      });
    }

    if (props.enableRowAddWithValues && props.enableRowAddWithValues.enable) {
      commandBarItems.push({
        id: 'addrowswithdata',
        key: 'addrowswithdata',
        text: 'Add Rows with Data',
        disabled: isGridInEdit || editMode,
        iconProps: {
          iconName: 'AddToShoppingList'
        },
        onClick: function onClick() {
          return RowSelectOperations(_edittype.EditType.AddRowWithData, {});
        }
      });
    }

    if (props.enableGridRowsDelete) {
      commandBarItems.push({
        id: 'deleterows',
        key: 'deleterows',
        text: 'Delete Rows',
        disabled: isGridInEdit || editMode || selectionCount == 0,
        iconProps: {
          iconName: 'DeleteRows'
        },
        onClick: function onClick() {
          return RowSelectOperations(_edittype.EditType.DeleteRow, {});
        }
      });
    }

    if (props.enableColumnEdit) {
      commandBarItems.push({
        id: 'updatecolumn',
        key: 'updatecolumn',
        disabled: isGridInEdit || editMode || selectionCount == 0,
        text: !isUpdateColumnClicked ? 'Update Column' : 'Save Column Update',
        iconProps: {
          iconName: 'SingleColumnEdit'
        },
        onClick: function onClick() {
          return RowSelectOperations(_edittype.EditType.ColumnEdit, {});
        }
      });
    }

    if (props.enableGridReset) {
      commandBarItems.push({
        id: 'resetgrid',
        key: 'resetGrid',
        disabled: isGridInEdit || editMode || !isGridStateEdited,
        text: 'Reset Data',
        iconProps: {
          iconName: 'Refresh'
        },
        onClick: function onClick() {
          return ResetGridData();
        }
      });
    }

    return commandBarItems;
  };

  var CreateCommandBarFarItemProps = function CreateCommandBarFarItemProps() {
    var commandBarItems = [];

    if (props.enableUnsavedEditIndicator && (props.enableRowEdit || props.enableCellEdit || props.enableBulkEdit || props.enableColumnEdit || props.enableTextFieldEditMode)) {
      commandBarItems.push({
        id: 'info',
        key: 'info',
        text: isGridStateEdited ? "Grid has unsaved data. Click on 'Submit' to save" : '',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        disabled: !isGridStateEdited,
        iconOnly: true,
        iconProps: {
          iconName: 'InfoSolid'
        }
      });
    }

    commandBarItems.push({
      key: 'filteredrecs',
      text: "".concat(defaultGridData.filter(function (x) {
        return x._grid_row_operation_ != _operation.Operation.Delete && x._is_filtered_in_ == true && x._is_filtered_in_grid_search_ == true && x._is_filtered_in_column_filter_ == true;
      }).length, "/").concat(defaultGridData.length),
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Filtered Records',
      iconOnly: false,
      iconProps: {
        iconName: 'PageListFilter'
      }
    });
    return commandBarItems;
  };

  var GridColumns = CreateColumnConfigs();
  var CommandBarItemProps = CreateCommandBarItemProps();
  var CommandBarFarItemProps = CreateCommandBarFarItemProps();

  function _getSelectionDetails() {
    var count = _selection.getSelectedCount();

    setSelectionCount(count);
    setSelectedItems(_selection.getSelection());
    setSelectedIndices(_selection.getSelectedIndices());

    if (props.onGridSelectionChange) {
      props.onGridSelectionChange(_selection.getSelection());
    }

    switch (count) {
      case 0:
        return 'No items selected';

      case 1:
        return '1 item selected: ';

      default:
        return "".concat(count, " items selected");
    }
  }

  var onRenderDetailsHeader = function onRenderDetailsHeader(props, defaultRender) {
    if (!props) {
      return null;
    }

    var onRenderColumnHeaderTooltip = function onRenderColumnHeaderTooltip(tooltipHostProps) {
      return /*#__PURE__*/React.createElement(_officeUiFabricReact.TooltipHost, tooltipHostProps);
    };

    return /*#__PURE__*/React.createElement(_officeUiFabricReact.Sticky, {
      stickyPosition: _officeUiFabricReact.StickyPositionType.Header,
      isScrollSynced: true
    }, defaultRender(_objectSpread(_objectSpread({}, props), {}, {
      onRenderColumnHeaderTooltip: onRenderColumnHeaderTooltip
    })));
  };

  var _onRenderPlainCard = function _onRenderPlainCard(column, rowNum, rowData) {
    return /*#__PURE__*/React.createElement("div", {
      className: _editablegridstyles.controlClass.plainCard
    }, /*#__PURE__*/React.cloneElement(column.hoverComponentOptions.hoverChildComponent, {
      column: column,
      rowNum: rowNum,
      rowData: rowData
    }));
  };
  /* #region [Span Renders] */


  var RenderLinkSpan = function RenderLinkSpan(props, index, rowNum, column, item, EditCellValue) {
    var _column$linkOptions, _column$linkOptions2, _column$linkOptions3, _column$linkOptions4;

    return /*#__PURE__*/React.createElement("span", {
      id: "id-".concat(props.id, "-col-").concat(index, "-row-").concat(rowNum),
      className: (0, _editablegridstyles.GetDynamicSpanStyles)(column, item[column.key]),
      onClick: HandleCellOnClick(props, column, EditCellValue, rowNum),
      onDoubleClick: HandleCellOnDoubleClick(props, column, EditCellValue, rowNum)
    }, (_column$linkOptions = column.linkOptions) !== null && _column$linkOptions !== void 0 && _column$linkOptions.onClick ? /*#__PURE__*/React.createElement(_officeUiFabricReact.Link, {
      target: "_blank",
      disabled: (_column$linkOptions2 = column.linkOptions) === null || _column$linkOptions2 === void 0 ? void 0 : _column$linkOptions2.disabled,
      underline: true,
      onClick: function onClick() {
        var params = {
          rowindex: [rowNum],
          data: defaultGridData,
          triggerkey: column.key,
          activatetriggercell: false
        };
        column.linkOptions.onClick(params);
      }
    }, item[column.key]) : /*#__PURE__*/React.createElement(_officeUiFabricReact.Link, {
      target: "_blank",
      disabled: (_column$linkOptions3 = column.linkOptions) === null || _column$linkOptions3 === void 0 ? void 0 : _column$linkOptions3.disabled,
      underline: true,
      href: (_column$linkOptions4 = column.linkOptions) === null || _column$linkOptions4 === void 0 ? void 0 : _column$linkOptions4.href
    }, item[column.key]));
  };

  var RenderTextFieldSpan = function RenderTextFieldSpan(props, index, rowNum, column, item, EditCellValue) {
    return RenderSpan(props, index, rowNum, column, item, HandleCellOnClick, EditCellValue, HandleCellOnDoubleClick);
  };

  var RenderPickerSpan = function RenderPickerSpan(props, index, rowNum, column, item, EditCellValue) {
    return RenderSpan(props, index, rowNum, column, item, HandleCellOnClick, EditCellValue, HandleCellOnDoubleClick);
  };

  var RenderDropdownSpan = function RenderDropdownSpan(props, index, rowNum, column, item, EditCellValue) {
    return RenderSpan(props, index, rowNum, column, item, HandleCellOnClick, EditCellValue, HandleCellOnDoubleClick);
  };

  var RenderDateSpan = function RenderDateSpan(props, index, rowNum, column, item, EditCellValue) {
    return /*#__PURE__*/React.createElement("span", {
      id: "id-".concat(props.id, "-col-").concat(index, "-row-").concat(rowNum),
      className: (0, _editablegridstyles.GetDynamicSpanStyles)(column, item[column.key]),
      onClick: HandleCellOnClick(props, column, EditCellValue, rowNum),
      onDoubleClick: HandleCellOnDoubleClick(props, column, EditCellValue, rowNum)
    }, item && item[column.key] ? column.dateFormater ? column.dateFormater(new Date(item[column.key])) : new Date(item[column.key]).toDateString() : null);
  };

  var RenderMultilineTextFieldSpan = function RenderMultilineTextFieldSpan(props, index, rowNum, column, item, EditCellValue) {
    return RenderSpan(props, index, rowNum, column, item, HandleCellOnClick, EditCellValue, HandleCellOnDoubleClick);
  };

  var RenderSpan = function RenderSpan(props, index, rowNum, column, item, HandleCellOnClick, EditCellValue, HandleCellOnDoubleClick) {
    return /*#__PURE__*/React.createElement("span", {
      id: "id-".concat(props.id, "-col-").concat(index, "-row-").concat(rowNum),
      className: (0, _editablegridstyles.GetDynamicSpanStyles)(column, item[column.key]),
      onClick: HandleCellOnClick(props, column, EditCellValue, rowNum),
      onDoubleClick: HandleCellOnDoubleClick(props, column, EditCellValue, rowNum)
    }, item[column.key]);
  };
  /* #endregion */

  /* #region [Utilities] */


  function HandleCellOnDoubleClick(props, column, EditCellValue, rowNum) {
    return function () {
      return props.enableCellEdit == true && column.editable == true && !props.enableSingleClickCellEdit ? EditCellValue(column.key, rowNum, true) : null;
    };
  }

  function HandleCellOnClick(props, column, EditCellValue, rowNum) {
    return function () {
      return props.enableCellEdit == true && column.editable == true && props.enableSingleClickCellEdit ? EditCellValue(column.key, rowNum, true) : null;
    };
  }
  /* #endregion */


  return /*#__PURE__*/React.createElement(_officeUiFabricReact.Fabric, null, /*#__PURE__*/React.createElement(_officeUiFabricReact.Panel, {
    isOpen: isOpenForEdit,
    onDismiss: dismissPanelForEdit,
    isLightDismiss: true,
    headerText: "Edit Grid Data",
    closeButtonAriaLabel: "Close",
    type: _officeUiFabricReact.PanelType.smallFixedFar
  }, /*#__PURE__*/React.createElement(_editpanel["default"], {
    onChange: onEditPanelChange,
    columnConfigurationData: props.columns
  })), props.enableRowAddWithValues && props.enableRowAddWithValues.enable ? /*#__PURE__*/React.createElement(_officeUiFabricReact.Panel, {
    isOpen: isOpenForAdd,
    onDismiss: dismissPanelForAdd,
    isLightDismiss: true,
    headerText: "Add Rows",
    closeButtonAriaLabel: "Close",
    type: _officeUiFabricReact.PanelType.smallFixedFar
  }, /*#__PURE__*/React.createElement(_addrowpanel["default"], {
    onChange: onAddPanelChange,
    columnConfigurationData: props.columns,
    enableRowsCounterField: props.enableRowAddWithValues.enableRowsCounterInPanel
  })) : null, defaultTag.length > 0 ? /*#__PURE__*/React.createElement(_officeUiFabricReact.TagPicker, {
    onResolveSuggestions: onFilterChanged,
    getTextFromItem: getTextFromItem,
    pickerSuggestionsProps: pickerSuggestionsProps,
    inputProps: inputProps,
    selectedItems: defaultTag,
    onChange: onFilterTagListChanged
  }) : null, props.enableCommandBar === undefined || props.enableCommandBar === true ? /*#__PURE__*/React.createElement(_CommandBar.CommandBar, {
    items: CommandBarItemProps,
    ariaLabel: "Command Bar",
    farItems: CommandBarFarItemProps
  }) : null, showSpinner ? /*#__PURE__*/React.createElement(_officeUiFabricReact.Spinner, {
    label: "Updating...",
    ariaLive: "assertive",
    labelPosition: "right",
    size: _officeUiFabricReact.SpinnerSize.large
  }) : null, showFilterCallout && filterCalloutComponent, /*#__PURE__*/React.createElement("div", {
    className: (0, _officeUiFabricReact.mergeStyles)({
      height: props.height != null ? props.height : '70vh',
      width: props.width != null ? props.width : '130vh',
      position: 'relative',
      backgroundColor: 'white'
    })
  }, /*#__PURE__*/React.createElement(_officeUiFabricReact.ScrollablePane, {
    scrollbarVisibility: _officeUiFabricReact.ScrollbarVisibility.auto
  }, /*#__PURE__*/React.createElement(_MarqueeSelection.MarqueeSelection, {
    selection: _selection
  }, /*#__PURE__*/React.createElement(_DetailsList2.DetailsList, {
    compact: true,
    items: defaultGridData.length > 0 ? defaultGridData.filter(function (x) {
      return x._grid_row_operation_ != _operation.Operation.Delete && x._is_filtered_in_ == true && x._is_filtered_in_grid_search_ == true && x._is_filtered_in_column_filter_ == true;
    }) : [],
    columns: GridColumns,
    selectionMode: props.selectionMode // layoutMode={props.layoutMode}
    // constrainMode={props.constrainMode}
    ,
    layoutMode: _DetailsList3.DetailsListLayoutMode.fixedColumns,
    constrainMode: _DetailsList.ConstrainMode.unconstrained,
    selection: _selection,
    setKey: "none",
    onRenderDetailsHeader: onRenderDetailsHeader,
    ariaLabelForSelectAllCheckbox: "Toggle selection for all items",
    ariaLabelForSelectionColumn: "Toggle selection",
    checkButtonAriaLabel: "Row checkbox",
    ariaLabel: props.ariaLabel,
    ariaLabelForGrid: props.ariaLabelForGrid,
    ariaLabelForListHeader: props.ariaLabelForListHeader,
    cellStyleProps: props.cellStyleProps,
    checkboxCellClassName: props.checkboxCellClassName,
    checkboxVisibility: props.checkboxVisibility,
    className: props.className,
    columnReorderOptions: props.columnReorderOptions,
    componentRef: props.componentRef,
    disableSelectionZone: props.disableSelectionZone,
    dragDropEvents: props.dragDropEvents,
    enableUpdateAnimations: props.enableUpdateAnimations,
    enterModalSelectionOnTouch: props.enterModalSelectionOnTouch,
    getCellValueKey: props.getCellValueKey,
    getGroupHeight: props.getGroupHeight,
    getKey: props.getKey,
    getRowAriaDescribedBy: props.getRowAriaDescribedBy,
    getRowAriaLabel: props.getRowAriaLabel,
    groupProps: props.groupProps,
    groups: props.groups,
    indentWidth: props.indentWidth,
    initialFocusedIndex: props.initialFocusedIndex,
    isHeaderVisible: props.isHeaderVisible,
    isPlaceholderData: props.isPlaceholderData,
    listProps: props.listProps,
    minimumPixelsForDrag: props.minimumPixelsForDrag,
    onActiveItemChanged: props.onActiveItemChanged,
    onColumnHeaderClick: props.onColumnHeaderClick,
    onColumnHeaderContextMenu: props.onColumnHeaderContextMenu,
    onColumnResize: props.onColumnResize,
    onDidUpdate: props.onDidUpdate,
    onItemContextMenu: props.onItemContextMenu,
    onItemInvoked: props.onItemInvoked,
    onRenderCheckbox: props.onRenderCheckbox,
    onRenderDetailsFooter: props.onRenderDetailsFooter,
    onRenderItemColumn: props.onRenderItemColumn,
    onRenderMissingItem: props.onRenderMissingItem,
    onRenderRow: props.onRenderRow,
    onRowDidMount: props.onRowDidMount,
    onRowWillUnmount: props.onRowWillUnmount,
    onShouldVirtualize: props.onShouldVirtualize,
    rowElementEventMap: props.rowElementEventMap,
    selectionPreservedOnEmptyClick: props.selectionPreservedOnEmptyClick,
    selectionZoneProps: props.selectionZoneProps,
    shouldApplyApplicationRole: props.shouldApplyApplicationRole,
    styles: props.styles,
    useFastIcons: props.useFastIcons,
    usePageCache: props.usePageCache,
    useReducedRowRenderer: props.useReducedRowRenderer,
    viewport: props.viewport
  })))), /*#__PURE__*/React.createElement(_officeUiFabricReact.Dialog, {
    hidden: !dialogContent,
    onDismiss: CloseRenameDialog,
    closeButtonAriaLabel: "Close"
  }, dialogContent), messageDialogProps.visible ? /*#__PURE__*/React.createElement(_messagedialog["default"], {
    message: messageDialogProps.message,
    subMessage: messageDialogProps.subMessage,
    onDialogClose: CloseMessageDialog
  }) : null, props.enableColumnEdit && isUpdateColumnClicked ? /*#__PURE__*/React.createElement(_columnupdatedialog["default"], {
    columnConfigurationData: props.columns,
    onDialogCancel: CloseColumnUpdateDialog,
    onDialogSave: UpdateGridColumnData
  }) : null, props.enableColumnFilterRules && isColumnFilterClicked ? /*#__PURE__*/React.createElement(_columnfilterdialog["default"], {
    columnConfigurationData: props.columns.filter(function (item) {
      return filteredColumns.indexOf(item) < 0 && (0, _helper.isColumnDataTypeSupportedForFilter)(item.dataType);
    }),
    onDialogCancel: CloseColumnFilterDialog,
    onDialogSave: onFilterApplied,
    gridData: defaultGridData
  }) : null);
};

var _default = EditableGrid;
exports["default"] = _default;