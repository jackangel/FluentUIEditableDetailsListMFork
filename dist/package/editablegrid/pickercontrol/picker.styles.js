"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = void 0;

var _officeUiFabricReact = require("office-ui-fabric-react");

var classNames = (0, _officeUiFabricReact.mergeStyleSets)({
  plainCard: {
    width: 200,
    height: 140,
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
exports.classNames = classNames;