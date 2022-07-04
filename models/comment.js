const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class comment extends Model {}

comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = comment;