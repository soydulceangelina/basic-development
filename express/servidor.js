var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(pet, result)
{
  result.send("Este es el home Danielitis");
}

function cursos(pet, result)
{
  result.send("Estos son los cursos");
}

app.listen(8989);
