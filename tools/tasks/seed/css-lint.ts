import * as colorguard from 'colorguard';
import * as doiuse from 'doiuse';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as reporter from 'postcss-reporter';
import * as stylelint from 'stylelint';
import { join} from 'path';

import { APP_ASSETS, APP_SRC, BROWSER_LIST, CSS_SRC, ENV } from '../../config';

const plugins = <any>gulpLoadPlugins();

const isProd = ENV === 'prod';

const processors = [
  doiuse({
    browsers: BROWSER_LIST,
  }),
  colorguard(),
  stylelint(),
  reporter({clearMessages: true})
];

function lintComponentCss() {
  return gulp.src([
      join(APP_SRC, '**', '*.css'),
      '!' + join(CSS_SRC, '**', '*.css')
    ])
    .pipe(isProd ? plugins.cached('css-lint') : plugins.util.noop())
    .pipe(plugins.postcss(processors));
}

function lintExternalCss() {
  return gulp.src(getExternalCss().map(r => r.src))
    .pipe(isProd ? plugins.cached('css-lint') : plugins.util.noop())
    .pipe(plugins.postcss(processors));
}

function getExternalCss() {
  return APP_ASSETS.filter(d => /\.css$/.test(d.src) && !d.vendor);
}

export = () => merge(lintComponentCss(), lintExternalCss());
