'use strict'

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  autoprefixer = require('autoprefixer'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),
  csso = require('gulp-csso'),
  sync = require('browser-sync').create(),
  reload = sync.reload,
  del = require('del'),
  htmlmin = require('gulp-htmlmin'),
  webpi = require('gulp-webp');


// Clean
const clean = () => {
  return del('dist');
};
exports.clean = clean;


// Copy
const copy = () => {
  return gulp.src([
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**',
    'src/scripts/**/*.js',
    'src/*.ico'
  ],
  {base: 'src'}
  )
  .pipe(gulp.dest('dist'))
};
exports.clean = clean;


// Refresh
const refresh = done => {
  sync.reload();
  done();
};
exports.refresh = refresh;


// Css
const css = () => {
  return gulp.src('src/styles/index.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(csso())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/styles'))
  .pipe(reload({stream: true}))
};
exports.css = css;


// Html
const html = () => {
  return gulp.src('src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('dist'))
  .pipe(reload({stream: true}))
};
exports.html = html;


// Script
const scripts = () => {
  return gulp.src('src/scripts/**/*.js')
  .pipe(gulp.dest('dist/scripts'))
  .pipe(reload({stream: true}))
};
exports.scripts = scripts;


// Images
const images = () => {
  return gulp.src('src/img')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.mozjpeg({progressive: true}),
    imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'))
};
exports.images = images;


// Webp
const webp = () =>  {
  return gulp.src('src/img')
  .pipe(webpi({quality: 50}))
  .pipe(gulp.dest('dist/img'))
};
exports.webp = webp;


// Server
const server = () => {
  sync.init({
    server: 'dist',
    open: true,
    notify: true,
    cors: true
  })
    gulp.watch('src/styles/**/*.scss', gulp.series(css, refresh));
    gulp.watch('src/scripts/**/*.js', gulp.series(scripts, refresh));
    gulp.watch('src/*.html', gulp.series(html, refresh));

};
exports.server = server;


// Build
const build = gulp.series(
  clean,
  copy,
  css,
  html,
  scripts,
  server
  );
exports.build = build;


// Start
const start = gulp.series(
  build,
  server
);
exports.start = start;
