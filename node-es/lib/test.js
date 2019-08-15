"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.plus = plus;
exports["default"] = _default;

function add(a, b) {
  return a + b;
}

function plus(a, b) {
  return a - b;
}

function _default(name) {
  return "Hello ".concat(name);
}