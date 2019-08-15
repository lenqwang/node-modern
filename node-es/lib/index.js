"use strict";

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

var _test = _interopRequireWildcard(require("./test"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pkgContent = (0, _fs.readFileSync)(_path["default"].resolve(process.cwd(), 'package.json'), 'utf8'); // console.log(pkgContent)

var addResult = (0, _test.add)(1, 2);
var plusResult = (0, _test.plus)(18, 3);
console.log(addResult, plusResult, (0, _test["default"])('node-es'));