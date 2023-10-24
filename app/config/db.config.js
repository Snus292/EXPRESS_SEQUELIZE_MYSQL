module.exports = {
    HOST: "localhost",
    USER: "express_sequelize_mysql",
    PASSWORD: "express_sequelize_mysql",
    DB: "express_sequelize_mysql",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };