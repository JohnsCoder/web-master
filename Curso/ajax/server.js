const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");
const time = new Date();
date = {
     yr: `${time.getFullYear()}`,
     mt: `${time.getMonth()}`.padStart(2, "0"),
     dy: `${time.getDay()}`.padStart(2, "0"),
     hr: `${time.getHours()}`.padStart(2, "0"),
     mn: `${time.getMinutes()}`.padStart(2, "0"),
     sc: `${time.getSeconds()}`.padStart(2, "0"),
};
const now = `${date.yr}-${date.mt}-${date.dy}_${date.hr}-${date.mn}-${date.sc}`;

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${now}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }
    res.end("Concluído com sucesso.");
  });
});

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.get('/parOuImpar', (req, res) => {
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})
app.listen(8080, () => console.log(`listening on http://localhost:8080 `));
