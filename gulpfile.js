const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildingStyle = () => {
  return src("./main.scss") // Corrected function name
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dest/css"));
};

const watchFun = () => {
  watch("./main.scss", buildingStyle); // Simplified function
};

exports.default = series(buildingStyle, watchFun);
