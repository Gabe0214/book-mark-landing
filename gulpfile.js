const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');

// Saas task

function scssTask() {
	return src('scss/styles.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([ cssnano() ]))
		.pipe(dest('dist', { sourcemaps: '.' }));
}

function jsTask() {
	return src('js/app.js', { sourcemaps: '.' }).pipe(terser()).pipe(dest('dist', { sourcemaps: '.' }));
}

//Browsersync Task

function browserSyncServer(cb) {
	browsersync.init({
		server: {
			baseDir: '.'
		}
	});
	cb();
}

function browserSyncReload(cb) {
	browsersync.reload();
	cb();
}

//watch task

function watchTask() {
	watch('*.html', browserSyncReload);
	watch([ 'scss/**/*.scss', 'js/**/*.js' ], series(scssTask, jsTask, browserSyncReload));
}

//default gulp task

exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);
