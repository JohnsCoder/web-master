 function saudacao(value) {
     return (req, res, next) => {
          console.log(`olá ${value}`);
next()
     }
}
module.exports = saudacao