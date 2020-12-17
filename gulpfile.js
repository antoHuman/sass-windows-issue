const {task, src, dest} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');

const browser_support = ['last 2 versions', 'Firefox >= 51', 'iOS >= 8', 'ie 11'];

task('default', () => {
    return src('*.{scss,css}', {cwd: '.'})
        .pipe(sass().on('error', sass.logError))
        .pipe(
            sass({
                outputStyle: 'expanded',
            }).on('error', sass.logError)
        )
        .pipe(
            postcss([
                postcssCustomProperties(),
                autoprefixer({
                    grid: 'autoplace',
                    overrideBrowserslist: browser_support,
                }),
            ])
        )
        .pipe(dest('./'));
});
