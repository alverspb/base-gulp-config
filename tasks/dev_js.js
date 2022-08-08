const { src, dest } = require("gulp");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");

module.exports = function dev_js() {
  return src(["src/js/libs/*.js", "src/js/01_main.js"])
    .pipe(map.init())
    .pipe(terser())
    .pipe(concat("main.min.js"))
    .pipe(map.write("../sourcemaps"))
    .pipe(dest("build/js/"))
    .pipe(bs.stream());
};
