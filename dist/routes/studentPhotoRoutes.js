"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _StudentPhotoController = require('../controllers/StudentPhotoController'); var _StudentPhotoController2 = _interopRequireDefault(_StudentPhotoController);

const router = new (0, _express.Router)();

router.post("/", _loginRequired2.default, _StudentPhotoController2.default.store);

exports. default = router;
