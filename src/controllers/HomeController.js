class HomeController {
  async index(request, response) {
    response.json("Estou no index da home.");
  }
}

export default new HomeController();
