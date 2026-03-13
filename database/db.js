import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import "dotenv/config"; // importa o .env

export const sequelizeUsers = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_USERS_NAME,
  user: process.env.DB_USERS_USER,
  password: process.env.DB_USERS_PASS,
  host: process.env.DB_USERS_HOST,
  port: Number(process.env.DB_USERS_PORT),
  ssl: false,
});


export const sequelizeFoods = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_FOODS_NAME,
  user: process.env.DB_FOODS_USER,
  password: process.env.DB_FOODS_PASS, // <--- VEJA SE NÃO ESTÁ DB_USERS_PASS AQUI
  host: process.env.DB_FOODS_HOST,
  port: Number(process.env.DB_FOODS_PORT),
});


