import express from "express";
const app = express();


app.get("/", (req, res) => {

  req.query.nombre = "desconocido"
  res.send(`Hola ${req.query.nombre}!`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
