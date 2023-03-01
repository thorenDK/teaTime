/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Comments', [{
      body: 'Хороший чай!',
      user_id: 1,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Ужасный чай',
      user_id: 2,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Норм',
      user_id: 2,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Норм',
      user_id: 1,
      tea_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
