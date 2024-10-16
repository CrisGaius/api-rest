"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(request, response) {
    response.json("Estou no index da home.");
  }
}

exports. default = new HomeController();
