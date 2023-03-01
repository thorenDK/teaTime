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
    await queryInterface.bulkInsert("Teas", [
      {
        name: "Черный чай",
        place: "Индия",
        coordinates_x:
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
        coordinates_y: "123",
        img: "https://tea.ru/upload/blog/0920/14/1.jpg",
        description:
          "Чёрный чай — вид чая, подвергающийся полной ферментации в течение от двух недель до месяца. Традиционно наиболее популярный вид чая в Европе, включая Россию. Название «чёрный чай» закрепилось в Европе, в китайском языке этот тип чая называется кра́сным, такой цвет он имеет в заваренном виде.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Зелёный чай",
        place: "Индия",
        coordinates_x:
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
        coordinates_y: "123",
        img: "https://majaro.ru/wa-data/public/photos/68/01/168/168.970.png",
        description:
          "Зелёный чай — чай, подвергнутый минимальной ферментации. И зелёный, и чёрный чай получают из листьев одного и того же чайного куста, однако различными способами.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Белый чай",
        place: "Китай",
        coordinates_x:
          "https://flagof.ru/wp-content/uploads/2018/10/%D0%9A%D0%9D%D0%A0_1.jpg",
        coordinates_y: "123",
        img: "https://charitea.ru/wp-content/uploads/2020/01/Vietnam-White-tea-old-trees-635x635.jpg",
        description:
          "Бе́лый чай — вид чая, подвергающийся слабой ферментации (окислению). Белый чай меньше всего подвергается ферментации, примерно на 5-7 %.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пуэр",
        place: "Китай",
        coordinates_x:
          "https://flagof.ru/wp-content/uploads/2018/10/%D0%9A%D0%9D%D0%A0_1.jpg",
        coordinates_y: "123",
        img: "https://ethnomir.ru/upload/medialibrary/17d/puer.jpg",
        description:
          "Пуэ́р — постферментированный чай. Отличается специфической технологией производства: собранные листья, обработанные до уровня зелёного чая, подвергаются процедуре микробной ферментации — естественному либо искусственному старению.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Улун",
        place: "Китай",
        coordinates_x:
          "https://flagof.ru/wp-content/uploads/2018/10/%D0%9A%D0%9D%D0%A0_1.jpg",
        coordinates_y: "123",
        img: "https://www.osteria.ru/upload/resize_cache/webp/iblock/3d9/j6lk81cqzt9fs4kc5s93u3pqt9lu1xr6/%20%D1%83%D0%BB%D1%83%D0%BD%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
        description:
          "Улун, или цин ча — полуферментированный чай, который по китайской классификации занимает промежуточное положение между жёлтым и «красным». По классификации по степени ферментации ферментируется на 50 %.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Матча",
        place: "Япония",
        coordinates_x:
          "https://www.forma-shop.ru/wa-data/public/shop/products/59/02/259/images/908/908.2000.jpg",
        coordinates_y: "123",
        img: "https://e2.edimdoma.ru/data/ingredients/0000/1200/1200-ed4_wide.jpg?1515760357",
        description:
          "Матча – это японский зеленый чай, растертый в порошок. По-японски он называется маття, а в нашей транскрипции матча. Этот чай традиционно используется в японской чайной церемонии. Особенности выращивания и приготовления позволяют этому напитку сохранять огромное количество полезных веществ.",
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
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
