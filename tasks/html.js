const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const bs = require("browser-sync");

module.exports = function html() {
  return src(["src/**/*.html", "!src/components/**/*.html"])
    .pipe(include())
    .pipe(
      htmlmin({
        removeScriptTypeAttributes: true,
        sortAttributes: true,
        removeStyleLinkTypeAttributes: true,
        conservativeCollapse: true,
        conservativeCollapse: true,
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(dest("build"))
    .pipe(bs.stream());
};
