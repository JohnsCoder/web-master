const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao() {
     return gulp.src('src/**/*.js')
     .pipe(babel({
          comments: false,
          presets: ["env"]
     }))
     .pipe(uglify())
     .on('error', err => console.log(err))
     .pipe(concat('codigo.min.js'))
     .pipe(gulp.dest('build'))
}

function fim (f) {
     console.log('Fim!!!')
     return f()
}
exports.default = series(
     padrao, fim)