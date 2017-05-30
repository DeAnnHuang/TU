var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    notify = require("gulp-notify"),
    mkdirp = require('mkdirp'),
    zip = require('gulp-zip'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    fs = require('fs'),
    path = require('path'),
    es = require('event-stream'),
    rename = require('gulp-rename');

//create direction
gulp.task('mkdir', function() {
    mk('assets/sass');
    mk('assets/js');
    mk('assets/img');
});

function mk(dir) {
    mkdirp(dir, function(err) {
        if (err) console.error(err)
        else console.log('make ' + dir + ' done!')
    });
}

//Library
//copy files to build
gulp.task('Library', function() {
    lb('node_modules/jquery/dist/jquery.min.js');
    // lb('node_modules/gsap/src/minified/TweenMax.min.js');
    // lb('node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js');
    // lb('node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js');
    // lb('node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js');
});

function lb(dir) {
    gulp.src(dir)
        .pipe(gulp.dest('assets/Library'));
}

//inicial creat

gulp.task('begin', ['mkdir', 'Library']);


// ======================================================== //


//Scripts Tasks

var scriptsPath = './assets/js/';

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

//js concat
gulp.task('scripts', function() {

    var folders = getFolders(scriptsPath);

    var tasks = folders.map(function(folder) {
        return gulp.src(path.join(scriptsPath, folder, '/*.js'))
            .pipe(plumber())
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest(scriptsPath))
            .pipe(uglify())
            .pipe(rename(folder + '.min.js'))
            .pipe(gulp.dest('build/js'))
            .pipe(livereload())
            .pipe(notify("js complete!"));
    });

    return es.concat.apply(null, tasks);

});

//Library concat
gulp.task('libraryJS', function() {
    gulp.src([
            "assets/Library/*.js",
        ])
        .pipe(plumber())
        .pipe(gulp.dest('build/js'))
        .pipe(livereload())
        .pipe(notify("library js complete!"));
});

//Style Tasks
//css uglifies
gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(plumber())
        .pipe(compass({
            css: 'build/css',
            sass: 'assets/sass',
            style: 'compressed',
            font: 'build/fonts',
            image: 'build/img',
            comments: false
        }))
        .pipe(livereload())
        .pipe(notify("style complete!"));
});


//IMG Tasks
//compress
gulp.task('imgmin', function() {
    gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
        .pipe(notify("min img complete!"));
});


//html Tasks
//html reloaded
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(livereload())
        .pipe(notify("html complete!"));
});


//Watch Tasks
//watch JS
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*.html', ['html']);
    gulp.watch('assets/img/*', ['imgmin']);
    gulp.watch('assets/Library/*.js', ['libraryJS']);
    gulp.watch('assets/js/**/*.js', ['scripts']);
    gulp.watch('assets/sass/*.scss', ['styles']);
    // gulp.watch(['./*.html', './build/**/*'], ['zip']);
});

gulp.task('default', ['html', 'scripts', 'libraryJS', 'styles', 'imgmin', 'Library', 'watch']);


// ======================================================== //


var pjson = require('./package.json');

//zip
gulp.task('zip', function() {
    gulp.src(['./*.html', './build/**/*'], { "base": "." })
        .pipe(gulp.dest('zip/' + pjson.name))
        .pipe(zip(pjson.name + '.zip'))
        .pipe(gulp.dest('zip'))
        .pipe(notify("ZIP complete!"));
});
