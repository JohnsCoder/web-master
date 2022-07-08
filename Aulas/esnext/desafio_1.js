const fs = require("fs");
const path = require("path");

const lerArquivos = (caminho) => {
     caminho = path.join(__dirname, "dados.txt");
     
     return new Promise((resolve, reject) => {
     
       const conteudo = fs.readFileSync(caminho);
       resolve(conteudo.toString())
     });
     
}

lerArquivos()
.then(console.log)