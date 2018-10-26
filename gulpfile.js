const gulp = require('gulp');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const shell = require('gulp-shell');

gulp.task('kss', shell.task(['kss --config kss-config.json']));

gulp.task('styleguide',['serve'], function() {
    // Watch .scss files
    gulp.watch('sass/*.scss', function(event) {
        gulp.run('kss');
        gulp.run('css');
    });
  });

// gulp.task('css', function() {
//     return gulp.src('src/project_one/style.scss')
//         .pipe(sass())
//         .pipe(rename('style.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.stream());
// });

// Compile sass
gulp.task('sass', function() {
    return gulp.src('sass/a.scss')
        .pipe(sass())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './src'
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

//Default
gulp.task('default', ['serve']);