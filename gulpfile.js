const {task, src, dest} = require('gulp');
const gulpSass = require('gulp-sass');
gulpSass.compiler = require('node-sass');

task('default', () => {
    return src('./test.scss')
        .pipe(
            gulpSass({
                outputStyle: 'expanded',
            }).on('error', gulpSass.logError)
        )
        .pipe(dest('./'));
});
