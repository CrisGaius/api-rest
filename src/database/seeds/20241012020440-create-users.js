const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert("users",
      [
        {
          name: "Wendel Nicolas",
          email: "gabirumolhado2021@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Aislan Dayvson",
          email: "aislandeus@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lucas Lima",
          email: "lucasbatistalima22@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});

  },

  async down(queryInterface, Sequelize) {
  }
};
