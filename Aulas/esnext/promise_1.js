let a = 1;
console.log(a);

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

p
.then((valor) => valor[0])
.then((valor) => valor[0])
.then((valor) => valor.toLowerCase())
.then((valor) => console.log(valor));

// ou

const primeiroNome = (array) => array[0]
const primeiraLetra = (string) => string[0]
const letraMinuscula =(letra) => letra.toLowerCase()

p
.then(primeiroNome)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log);
