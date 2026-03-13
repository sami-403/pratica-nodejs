import "dotenv/config";
import express from "express";
// Importamos as duas instâncias usando chaves { }
import { sequelizeUsers, sequelizeFoods } from "./database/db.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Função para sincronizar os dois bancos ao mesmo tempo
const connectDatabases = async () => {
  try {
    await sequelizeUsers.sync({ alter: true });
    console.log("✅ Banco de USUÁRIOS sincronizado!");

    // Sincroniza o banco de comidas
    await sequelizeFoods.sync({ alter: true });
    console.log("✅ Banco de COMIDAS sincronizado!");
  } catch (error) {
    console.error("❌ Erro ao sincronizar os bancos de dados:", error);
  }
};

connectDatabases();

app.get("/", (req, res) => {
  res.send("Ola mundo");
});

app.listen(port, () =>
  console.log(`🚀 O servidor esta rodando em "http://localhost:${port}"`),
);