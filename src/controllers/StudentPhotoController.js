import multer from "multer";

import multerConfig from "../config/multerConfig";

import StudentPhoto from "../models/StudentPhoto";

const upload = multer(multerConfig).single("photo");

class StudentPhotoController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) return response.status(400).json({ errors: [error.code] });

      try {
        const { filename, originalname } = request.file;
        const { id_student } = request.body;
        const newPhoto = await StudentPhoto.create({ filename, originalname, id_student });
        return response.json(newPhoto);
      } catch (e) {
        return response.status(400).json({ errors: ["Aluno não existe"] });
      }
    });
  }
}

export default new StudentPhotoController();
