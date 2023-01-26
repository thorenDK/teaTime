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
    await queryInterface.bulkInsert('Teas', [{
      name: 'Admin',
      place: 'India',
      coordinates_x: '123',
      coordinates_y: '123',
      img: 'https://e2.edimdoma.ru/data/ingredients/0000/1200/1200-ed4_wide.jpg?1515760357',
      description: 'tea such shitty tea',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
