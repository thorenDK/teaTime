const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Comment) {
      this.hasMany(Comment, {
        foreignKey: 'tea_id',
      });
    }
  }
  Tea.init({
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    coordinates_x: DataTypes.STRING,
    coordinates_y: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
