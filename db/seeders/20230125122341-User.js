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
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      secondName: 'Admin',
      email: '123@123',
      password: '$2b$10$DA3mNUzWA85i58wrwLRPaeYRKk0O8zVdt6gaQfD6qPCT68IVqSAEC',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Maks',
      secondName: 'Faks',
      email: 'max@123',
      password: '$2b$10$DA3mNUzWA85i58wrwLRPaeYRKk0O8zVdt6gaQfD6qPCT68IVqSAEC',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Alex',
      secondName: 'Minin',
      email: 'alex@123',
      password: '$2b$10$DA3mNUzWA85i58wrwLRPaeYRKk0O8zVdt6gaQfD6qPCT68IVqSAEC',
      isAdmin: false,
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
