const express = require("express");
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid.js");
const usuarioApi = require("./api/user.js");

const { salvar, obter } = usuarioApi;
const app = express();

// const produto = require("./api/produto.js");
require('./api/produto') (app, "com param!")

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(saudacao("Guilherme"));

app.post("/usuario", salvar);
app.get("/usuario", obter);

app.use("/opa", (req, res, next) => {
  console.log("Antes");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //      corpo += parte
  // })
  // req.on('end', () => {
  //      res.send(corpo)
  // })
  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/opa", (req, res, next) => {
  // res.send("<h1>test</h1>")

  // res.json({
  //      name: "ipad 32Gb",
  //      price: 1899,
  //      discount: 0.12
  // })

  res.json([
    { id: 7, nome: "Ana", position: 1 },
    { id: 34, nome: "Bia", position: 2 },
    { id: 73, nome: "Carlos", position: 3 },
  ]);
  next();
});

app.use("/opa", (req, res, next) => {
  console.log("Depois");
  next();
});

app.listen(3000, () => console.log("app running!"));
