const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promisses...
let obterAlunos = async () => {
     const ta = await getrTurma('A')
     const tb = await getrTurma('B')
     const tc = await getrTurma('C')
     return [].concat(ta, tb, tc)
} // retorna um objeto  AsyncFunction

obterAlunos()
.then(alunos => alunos.mao(a => a.nome))
.then(nomes => console.log(nomes))