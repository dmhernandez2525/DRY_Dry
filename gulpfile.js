var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var precss = require("precss");
var atImport = require("postcss-import");
var nodemon = require("gulp-nodemon");
var livereload = require("gulp-livereload");

// This is the heavy lifter for all the post css plugins as well as majority of the gulp logic
gulp.task("style", function() {
  var plugins = [
    atImport(),
    autoprefixer({ Browserslist: ["last 1 version"] }),
    cssnano(),
    precss()
  ];

  return gulp
    .src(["./src/styles/index.css", "./src/styles/index.scss"], {
      allowEmpty: true
    })
    .pipe(
      postcss(plugins, {
        syntax: require("postcss-scss")
      })
    )
    .pipe(gulp.dest("./public/dist/main.css"))
    .pipe(livereload());
});
// Run this command when developing styles it will run the minifing command
gulp.task("watch", function() {
  livereload.listen();
  gulp.watch("src/**/*.css", gulp.series("style"));
  gulp.watch("src/**/*.scss", gulp.series("style"));
});

// this command is obsolete
gulp.task("start", function(done) {
  nodemon({
    ext: "css jsx scss",
    tasks: ["css"],
    env: { NODE_ENV: "development" },
    ignore: ["node_modules/**", "dist/**"],
    done: done
  });
});
