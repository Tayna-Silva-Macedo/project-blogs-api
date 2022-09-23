module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    }
  );

  return Category;
};
