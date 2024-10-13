import Student from "../models/Student";
class StudentController {
  async index(request, response) {
    const students = await Student.findAll();
    response.json(students);
  }

  async show(request, response) {
    if (!request.params.id) return response.status(400).json({ errors: ["Missing ID."] });

    try {
      const student = await Student.findByPk(request.params.id);

      if (!student) return response.status(400).json({ errors: "Student not found." });

      const { id, name, last_name, email } = student;

      return response.json({ id, name, last_name, email });
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
