var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    clipboard = require('gulp-clipboard'),
    autoprefixer = require('gulp-autoprefixer'),
    combiner = require('stream-combiner2'),
    watch = require('gulp-watch');

gulp.task('default', ['less', 'watch']);

gulp.task('less', function() {

    var combined = combiner.obj([
        gulp.src('./src/main.less'),
        less({
            paths: [path.join(__dirname, 'src', 'includes')]
        }),
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        clipboard(),
        gulp.dest('./build')
    ]);

    combined.on('error', console.error.bind(console));
    
    return combined;
});

gulp.task('watch', function() {
    watch('src/**/*.less', function() {
        gulp.start('less');
    });
});
