const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const typescript = require('gulp-typescript');
const webpack = require('webpack');

// import gulp from 'gulp';
// import postcss from 'gulp-postcss';
// import sass from 'gulp-sass';
// import cssnano from 'cssnano';
// import typescript from 'gulp-typescript';
// import webpack from 'webpack';

function style() {
    let plugins = [
        cssnano()
    ]
    return gulp.src('./src/styles/scss/*scss')
        .pipe(sass())
        // .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/styles/css'));
}

function watch() {
    gulp.watch('./src/styles/scss/*scss', style)
    gulp.watch('./src/scripts/**/*.ts', bundle)
}

let tsProject = typescript.createProject({
    declaration: false
});

function tscript() {
    return gulp.src('./src/scripts/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./build/scripts'))
}


function bundle() {
  return new Promise((resolve, reject) => {
    webpack(require('./webpack.config.js'), (err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString({ colors: true }));
        resolve();
      }
    });
  });
}

exports.style = style
exports.watch = watch
exports.tscript = tscript
exports.bundle = bundle;