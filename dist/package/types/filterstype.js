"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringOperatorEval = exports.operatorsArr = exports.operatorEval1 = exports.numberOperatorEval = exports.dateOperatorEval = void 0;
var operatorsArr = [{
  type: 'string',
  value: ['equals', 'contains', 'starts with', 'ends with', 'not equal to']
}, {
  type: 'number',
  value: ['>', '<', '>=', '<=', '=', '!=']
}];
exports.operatorsArr = operatorsArr;
var operatorEval1 = {
  'equals': function equals(a, b) {
    return a == b;
  },
  'contains': function contains(a, b) {
    return a.indexOf(b) >= 0;
  },
  'starts with': function startsWith(a, b) {
    return a.startsWith(b);
  },
  'ends with': function endsWith(a, b) {
    return a.endsWith(b);
  },
  'not equal to': function notEqualTo(a, b) {
    return a != b;
  },
  '>': function _(a, b) {
    return a > b;
  },
  '<': function _(a, b) {
    return a < b;
  },
  '>=': function _(a, b) {
    return a >= b;
  },
  '<=': function _(a, b) {
    return a <= b;
  },
  '=': function _(a, b) {
    return a == b;
  },
  '!=': function _(a, b) {
    return a != b;
  }
};
exports.operatorEval1 = operatorEval1;

var numberOperatorEval = function numberOperatorEval(var1, var2, operator) {
  switch (operator) {
    case '>':
      return var1 > var2;

    case '<':
      return var1 < var2;

    case '>=':
      return var1 >= var2;

    case '<=':
      return var1 <= var2;

    case '=':
      return var1 == var2;

    case '!=':
      return var1 != var2;

    default:
      return false;
  }
};

exports.numberOperatorEval = numberOperatorEval;

var dateOperatorEval = function dateOperatorEval(var1, var2, operator) {
  switch (operator) {
    case '>':
      return var1 > var2;

    case '<':
      return var1 < var2;

    case '>=':
      return var1 >= var2;

    case '<=':
      return var1 <= var2;

    case '=':
      return var1 == var2;

    case '!=':
      return var1 != var2;

    default:
      return false;
  }
};

exports.dateOperatorEval = dateOperatorEval;

var stringOperatorEval = function stringOperatorEval(var1, var2, operator) {
  switch (operator) {
    case 'equals':
      return var1 == var2;

    case 'contains':
      return var1.indexOf(var2) >= 0;

    case 'starts with':
      return var1.startsWith(var2);

    case 'ends with':
      return var1.endsWith(var2);

    case 'not equal to':
      return var1 != var2;

    default:
      return false;
  }
};

exports.stringOperatorEval = stringOperatorEval;