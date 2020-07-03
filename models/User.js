const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty:{
              msg: "Esse campo não pode ser vazio"
          }
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty:{
              msg: "Esse campo não pode ser vazio"
          }
      }
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty:{
              msg: "Esse campo não pode ser vazio"
          }
      }
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)