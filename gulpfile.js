const { src, dest, parallel, series, watch } = require('gulp');

// Load plugins
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');

// BrowserSync
const PORT = 3000;

// Directories
const DEST = './dist/';
const DEST_JS = `${DEST}js/`;
const DEST_CSS = `${DEST}css/`;
const DEST_IMG = `${DEST}img/`;
const DEST_FONT = `${DEST_CSS}font/`;
const SRC = './src/';
const SRC_JS = `${SRC}js/`;
const SRC_CSS = `${SRC}scss/*main.scss`;
const SRC_IMG = `${SRC}img/`;
const SRC_FONT = `${SRC}scss/font/`;


// Clean assets
function clear() {
  return src(`${DEST}/*`, {
    read: false,
  }).pipe(clean({ force: true }));
}
//font function
function font() {
  return src(`${SRC_FONT}*`).pipe(dest(DEST_FONT));
}
// html function
function html() {
  const source = `${SRC}*.html`;

  return src(source)
    .pipe(changed(source))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(DEST))
    .pipe(browsersync.stream());
}

// JS function
function js() {
  const source = `${SRC_JS}*.js`;

  return src(source)
    .pipe(changed(source))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js',
      }),
    )
    .pipe(dest(DEST_JS))
    .pipe(browsersync.stream());
}

// CSS function
function css() {
  const source = SRC_CSS;

  return src(source)
    .pipe(changed(source))
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }),
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(
      rename({
        extname: '.min.css',
      }),
    )
    .pipe(cssnano())
    .pipe(dest(DEST_CSS))
    .pipe(browsersync.stream());
}

// Optimize images
function img() {
  return src(`${SRC_IMG}*`)
  .pipe(webp())
  .pipe(imagemin())
  .pipe(dest(DEST_IMG));
}
// Copy Favicon.ico
function favico(){
  return src(`${SRC}*.ico`)
  .pipe(dest(DEST));
}

// Watch files
function watchFiles() {
  watch(`${SRC_CSS}*`, css);
  watch(`${SRC_JS}*`, js);
  watch(`${SRC_IMG}*`, img);
  watch(`${SRC}*.html`, html);
  watch(`${SRC_FONT}*`, font);
  watch(`${SRC}*.ico`, favico);
  watch( `${SRC}lang`, html)
}
// BrowserSync
function browserSync() {
  browsersync.init({
    server: {
      baseDir: DEST,
    },
    port: PORT,
  });
}

// Tasks to define the execution of the functions simultaneously or in series
exports.watch = series(clear, parallel(js, css, img, html, font, favico, watchFiles, browserSync));
exports.default = series(clear, parallel(js, css, img, html, font, favico));
