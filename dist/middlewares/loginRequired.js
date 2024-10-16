"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) return response.status(401).json({ errors: ["Login obrigatório"] });

  const [, token] = authorization.split(" ");

  try {
    const userData = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userData;

    const user = await _User2.default.findOne({
      where: {
        id,
        email
      }
    });

    if (!user) return response.status(401).json({ errors: ["Usuário Inválido."] });

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch (e) {
    return response.status(401).json({ errors: "Token expirado ou inválido." });
  }
};
