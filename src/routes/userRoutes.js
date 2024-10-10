import { Router } from "express";
import userController from "../controllers/UserController";
const router = new Router;

router.get("/", userController.index);
router.get("/:id", userController.show);

router.post("/", userController.storeUser);

router.put("/", userController.update);
router.put("/:id", userController.update);

router.delete("/", userController.delete);
router.delete("/:id", userController.delete);

export default router;

/* Devemos ter no máximo esses seis métodos passados numa rota.
INDEX -> Lista todos os usuários -> GET
STORE/CREATE -> Cria um novo usuário -> POST
DELETE -> Apaga um usuário -> DELELTE
SHOW -> Mostra um usuário -> GET
UPDATE -> atualiza um usuário -> PATCH ou PUT
 */
