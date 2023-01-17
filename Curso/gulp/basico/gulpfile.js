const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = (f) => {
  console.log("tarefa Antes 1!");
  return f();
};

const antes2 = (f) => {
  console.log("tarefa Antes 1!");
  return f();
};
function copiar(f) {
//   gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
gulp.src('pastaA/**/*.txt')
  .pipe(gulp.dest('pastaB'));
  
  return f();
}

const fim = (f) => {
  console.log("Tarefa fim!");
  return f();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
