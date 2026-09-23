const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log("Clientes rodando na porta 3003");
});