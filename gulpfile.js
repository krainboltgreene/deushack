/* eslint-disable import/no-commonjs, node/no-unpublished-require */
const {join} = require("path")
const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpBabel = require("gulp-babel")
const gulpGzip = require("gulp-gzip")
const browserify = require("browserify")
const babelify = require("babelify")
const envify = require("envify")
const vinylSourceStream = require("vinyl-source-stream")
const vinylBuffer = require("vinyl-buffer")
const gulpChanged = require("gulp-changed")
const gulpGracefulError = require("gulp-graceful-error")
const {production} = require("gulp-environments")

const DESINATION = "./tmp/"
const GZIP = {
  append: true,
  threshold: true,
  gzipOptions: {
    level: 9,
    memLevel: 9,
  },
}

gulp.task("build:@internal", () => {
  const destination = join(DESINATION, "@internal")

  return gulp.src([
    "./source/@internal/**/*.js",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "@internal",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .graceful()
})

gulp.task("build:server", [
  "build:@internal",
], () => {
  const destination = join(DESINATION, "server")

  return gulp.src([
    "./source/server/**/*.js",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "server",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(production(gulp.dest(destination)))
    .graceful()
})

gulp.task("build:client", [
  "build:styles",
  "build:images",
  "build:assets",
  "build:fonts",
], () => {
  const destination = join(DESINATION, "client")

  return browserify({
    entries: "./source/client/index.js",
    transform: [
      [
        babelify,
        {ignore: "./source/**/test.js"},
      ],
      envify,
    ],
  })
    .bundle()
    .on("error", console.error)
    .pipe(vinylSourceStream("index.js"))
    .pipe(vinylBuffer())
    .pipe(gulpSize({
      title: "client",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
})

gulp.task("build:styles", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/assets/styles/**/*.css",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpConcat("index.css"))
    .pipe(gulpMyth())
    .pipe(gulpSize({
      title: "styles",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(production(gulpGzip(GZIP)))
    .graceful()
})

gulp.task("build:images", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/assets/images/*.png",
    "./source/assets/images/*.jpg",
    "./source/assets/images/*.ico",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "images",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(production(gulp.dest(destination)))
    .graceful()
})
gulp.task("build:fonts", () => {
  const destination = join(DESINATION, "client", "fonts")

  return gulp.src([
    "./node_modules/font-awesome/fonts/**/*",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "fonts",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(production(gulp.dest(destination)))
    .graceful()
})

gulp.task("build:assets", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/assets/metadata/*",
    "./source/assets/scripts/**/*.js",
  ])
    .pipe(gulpGracefulError())
    .pipe(gulpChanged(destination))
    .pipe(gulpSize({
      title: "assets",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
    .pipe(production(gulpGzip(GZIP)))
    .pipe(production(gulp.dest(destination)))
    .graceful()
})

gulp.task(
  "build:all",
  [
    "build:server",
    "build:client",
  ]
)
gulp.task(
  "watch:all",
  [
    "build:server",
    "build:client",
  ],
  () => {
    gulp.watch("source/server/**/*", [
      "build:server",
    ])
    gulp.watch("source/client/**/*", [
      "build:client",
    ])
    gulp.watch("source/assets/**/*", [
      "build:client",
    ])
    gulp.watch("source/@internal/**/*", [
      "build:server",
      "build:client",
    ])
  }
)
