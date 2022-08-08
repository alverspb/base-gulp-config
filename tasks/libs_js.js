const plugins = ["src/js/libs/*.js"];
const { src, dest } = require("gulp");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const chalk = require("chalk");

module.exports = function libs_js(done) {
  if (plugins.length > 0)
    return src(plugins)
      .pipe(map.init())
      .pipe(terser())
      .pipe(concat("libs.min.js"))
      .pipe(map.write("../sourcemaps"))
      .pipe(dest("build/js/"));
  else {
    return done(console.log(chalk.redBright("No added JS plugins")));
  }
};
