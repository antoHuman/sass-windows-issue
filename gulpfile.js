const {task, src, dest} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

task('default', () => {
    return src('*.{scss,css}', {cwd: '.'})
        .pipe(sass().on('error', sass.logError))
        .pipe(
            sass({
                outputStyle: 'expanded',
            }).on('error', sass.logError)
        )
        .pipe(dest('./'));
});
