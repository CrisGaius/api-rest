"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _StudentPhoto = require('../models/StudentPhoto'); var _StudentPhoto2 = _interopRequireDefault(_StudentPhoto);
class StudentController {
  async index(request, response) {
    try {
      const students = await _Student2.default.findAll({
        attributes: ["id", "name", "last_name", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [_StudentPhoto2.default, "id", "DESC"]],
        include: {
          model: _StudentPhoto2.default,
          attributes: ["id", "filename", "url"],
        }
      });
      return response.json(students);
    } catch (e) {
      return response.status(400).json({ errors: ["Algo deu errado ao selecionar os alunos."] });
    }
  }

  async show(request, response) {
    if (!request.params.id) return response.status(400).json({ errors: ["Missing ID."] });

    try {
      const student = await _Student2.default.findByPk(request.params.id, {
        attributes: ["id", "name", "last_name", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [_StudentPhoto2.default, "id", "DESC"]],
        include: {
          model: _StudentPhoto2.default,
          attributes: ["id", "filename", "url"],
        }
      });

      if (!student) return response.status(400).json({ errors: "Student not found." });

      return response.json(student);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(request, response) {
    try {
      const newStudent = await _Student2.default.create(request.body);
      return response.json(newStudent);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(request, response) {
    if (!request.params.id) return response.status(400).json({ errors: ["Missing ID."] });

    try {
      const student = await _Student2.default.findByPk(request.params.id);

      if (!student) return response.status(400).json({ errors: "Student not found." });

      const newDataStudent = await student.update(request.body);

      return response.json(newDataStudent);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(request, response) {
    if (!request.params.id) return response.status(400).json({ errors: ["Missing ID."] });

    try {
      const student = await _Student2.default.findByPk(request.params.id);

      if (!student) return response.status(400).json({ errors: "Student not found." });

      await student.destroy();

      return response.json(`${request.params.id} excluído com sucesso.`);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new StudentController();
