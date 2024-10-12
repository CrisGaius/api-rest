import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router;

// Não existem em um sistema real.
//router.get("/", loginRequired, userController.index); // Lista usuários
//router.get("/:id", userController.show); // Lista usuário

router.post("/", userController.storeUser);

router.put("/", loginRequired, userController.update);

router.delete("/", loginRequired, userController.delete);

export default router;

/* Devemos ter no máximo esses seis métodos passados numa rota.
INDEX -> Lista todos os usuários -> GET
STORE/CREATE -> Cria um novo usuário -> POST
DELETE -> Apaga um usuário -> DELELTE
SHOW -> Mostra um usuário -> GET
UPDATE -> atualiza um usuário -> PATCH ou PUT
 */
