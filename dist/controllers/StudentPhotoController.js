"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _StudentPhoto = require('../models/StudentPhoto'); var _StudentPhoto2 = _interopRequireDefault(_StudentPhoto);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single("photo");

class StudentPhotoController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) return response.status(400).json({ errors: [error.code] });

      try {
        const { filename, originalname } = request.file;
        const { id_student } = request.body;
        const newPhoto = await _StudentPhoto2.default.create({ filename, originalname, id_student });
        return response.json(newPhoto);
      } catch (e) {
        return response.status(400).json({ errors: ["Aluno não existe"] });
      }
    });
  }
}

exports. default = new StudentPhotoController();
