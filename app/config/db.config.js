module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "invsys",
  dialect: "mysql",
  pool: {
    max: 8,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
