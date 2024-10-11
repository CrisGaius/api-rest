import jwt from "jsonwebtoken";

export default (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) return response.status(401).json({ errors: ["Login obrigatório"] });

  const [, token] = authorization.split(" ");

  try {
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userData;

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch (e) {
    return response.status(401).json({ errors: "Token expirado ou inválido." });
  }
};
