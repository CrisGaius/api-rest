"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

require('./database/connection');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _studentRoutes = require('./routes/studentRoutes'); var _studentRoutes2 = _interopRequireDefault(_studentRoutes);
var _studentPhotoRoutes = require('./routes/studentPhotoRoutes'); var _studentPhotoRoutes2 = _interopRequireDefault(_studentPhotoRoutes);

class Application {
  constructor() {
    this.application = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(_express2.default.urlencoded({ extended: true }));
    this.application.use(_express2.default.json());
    this.application.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads", "images")));
  }

  routes() {
    this.application.use("/", _homeRoutes2.default);
    this.application.use("/users", _userRoutes2.default);
    this.application.use("/tokens", _tokenRoutes2.default);
    this.application.use("/students", _studentRoutes2.default);
    this.application.use("/photos", _studentPhotoRoutes2.default);
  }
}

exports. default = new Application().application;
