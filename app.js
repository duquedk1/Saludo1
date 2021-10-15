import express from "express";
const app = express();
app.get("/", function (req, res) {
    req.query.nombre = "desconocido";
    res.send(`<h1>Hola ${req.query.nombre}!</h1>`);
  });

app.listen(3000, () => console.log("Listening on port 3000!"));
