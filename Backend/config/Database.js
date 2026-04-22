import { Sequelize } from 'sequelize';

const db = new Sequelize('db_penggajian3', 'admin', '123456', {
    host: "localhost",
    dialect: "mysql"
});

export default db;