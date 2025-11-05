const conector = require("./database/conexion.cjs");
const express = require("express");
const cors = require("cors");
const persona_paths = require("./paths/persona.cjs");
const cookieParser = require("cookie-parser");
const fs = require("fs");

console.log("Iniciamos");
require("dotenv").config();
conector.conexion(); //Dentro del try se nos printea que estamos conectados

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.text({ type: "text/plain" })); //Para text/plain en req.body

// Rutas
app.use(persona_paths.router);
app.use(express.static("public"));

// Levantamos el servido
const PORT = 5050;
app.listen(PORT, "0.0.0.0", () => {
console.log(`Servidor HTTP corriendo en el puerto ${PORT}`);
});