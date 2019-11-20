"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emoji = exports.text = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _index = require("./index");

var _default = {
  title: "Button"
};
exports.default = _default;

var text = function text() {
  return _react.default.createElement(_index.Button, {
    onClick: (0, _addonActions.action)("clicked")
  }, "Hello Button");
};

exports.text = text;

var emoji = function emoji() {
  return _react.default.createElement(_index.Button, {
    onClick: (0, _addonActions.action)("clicked")
  }, _react.default.createElement("span", {
    role: "img",
    "aria-label": "so cool"
  }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"));
};

exports.emoji = emoji;