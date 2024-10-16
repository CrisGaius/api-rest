"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _StudentPhoto = require('../models/StudentPhoto'); var _StudentPhoto2 = _interopRequireDefault(_StudentPhoto);

const models = [_Student2.default, _User2.default, _StudentPhoto2.default];

const connection = new (0, _sequelize.Sequelize)(_database2.default);

for (let model of models) {
  model.init(connection);
}

let i = 0;
while (i < models.length) {
  _optionalChain([models, 'access', _ => _[i], 'access', _2 => _2.associate, 'optionalCall', _3 => _3(connection.models)]);
  i++;
}
