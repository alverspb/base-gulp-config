const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const terser = require("terser");
const gulpTerser = require("gulp-terser");

module.exports = function build_js() {
  return src(["src/components/**/*.js", "src/js/01_main.js"])
    .pipe(gulpTerser({}, terser.minify))
    .pipe(
      babel({
        presets: ["@babel/env", "minify"],
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(dest("build/js/"));
};
