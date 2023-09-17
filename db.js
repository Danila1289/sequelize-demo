const Sequelize = require('sequelize');
const sequelize = new Sequelize('Dam','root','dan2',{
    dialect: 'sqlite',
    host:'localhost',
    port: 3306
})

module.exports = sequelize;