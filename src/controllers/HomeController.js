import Student from "../models/Student";
class HomeController {

  async index(request, response) {
    const newStudent = await Student.create({
      name: "Júlia",
      last_name: "Vitória",
      email: "july123@gmail.com",
      age: 20,
      weight: 55,
      height: 1.60,
    });
    response.json({
      newStudent
    });
  }
}

export default new HomeController();
