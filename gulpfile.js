const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.svg_css = tasks.svg_css;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.html = tasks.html;
// exports.svg_sprite = tasks.svg_sprite;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.svg_css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  // exports.svg_sprite,
  exports.html,
  exports.bs_html,
  exports.watch
)
