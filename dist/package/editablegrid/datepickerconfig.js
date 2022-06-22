"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateToISOLikeButLocal = dateToISOLikeButLocal;
exports.DayPickerStrings = void 0;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var DayPickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  isRequiredErrorMessage: 'Field is required.',
  invalidInputErrorMessage: 'Invalid date format.'
};
exports.DayPickerStrings = DayPickerStrings;

function dateToISOLikeButLocal(date) {
  var offsetMs = date.getTimezoneOffset() * 60 * 1000;
  var msLocal = date.getTime() - offsetMs;
  var dateLocal = new Date(msLocal);
  var iso = dateLocal.toISOString();
  var isoLocal = iso.slice(0, 10);
  return isoLocal;
}