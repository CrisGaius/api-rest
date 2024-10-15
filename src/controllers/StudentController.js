import Student from "../models/Student";
import StudentPhoto from "../models/StudentPhoto";
class StudentController {
  async index(request, response) {
    try {
      const students = await Student.findAll({
        attributes: ["id", "name", "last_name", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [StudentPhoto, "id", "DESC"]],
        include: {
          model: StudentPhoto,
          attributes: ["id", "filename"],
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
      const student = await Student.findByPk(request.params.id, {
        attributes: ["id", "name", "last_name", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [StudentPhoto, "id", "DESC"]],
        include: {
          model: StudentPhoto,
          attributes: ["id", "filename"],
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
      const newStudent = await Student.create(request.body);
      return response.json(newStudent);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(request, response) {
    if (!request.params.id) return response.status(400).json({ errors: ["Missing ID."] });

    try {
      const student = await Student.findByPk(request.params.id);

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
      const student = await Student.findByPk(request.params.id);

      if (!student) return response.status(400).json({ errors: "Student not found." });

      await student.destroy();

      return response.json(`${request.params.id} excluído com sucesso.`);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
