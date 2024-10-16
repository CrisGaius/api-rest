"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não existem em um sistema real.
//router.get("/", loginRequired, userController.index); // Lista usuários
//router.get("/:id", userController.show); // Lista usuário

router.post("/", _loginRequired2.default, _UserController2.default.storeUser);

router.put("/", _loginRequired2.default, _UserController2.default.update);

router.delete("/", _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/* Devemos ter no máximo esses seis métodos passados numa rota.
INDEX -> Lista todos os usuários -> GET
STORE/CREATE -> Cria um novo usuário -> POST
DELETE -> Apaga um usuário -> DELELTE
SHOW -> Mostra um usuário -> GET
UPDATE -> atualiza um usuário -> PATCH ou PUT
 */
