import multer from "multer";

import multerConfig from "../config/multerConfig";

import StudentPhoto from "../models/StudentPhoto";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) return response.status(400).json({ errors: [error.code] });

      const { filename, originalname } = request.file;
      const { id_student } = request.body;
      const newPhoto = await StudentPhoto.create({ filename, originalname, id_student });
      return response.json(newPhoto);
    });
  }
}

export default new PhotoController();
