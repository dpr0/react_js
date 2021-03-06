const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => { return; };

const host = 'localhost';
const port = 3100;

var express = require('express');
var application = express();
const morgan = require('morgan');
application.use(morgan('combined'));
application.use(express.static('src/static'));
application.set('views', __dirname);
application.set('view engine', 'ejs');

const webpack = require('webpack');
const config = require('../../webpack.config.js').default;
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const compiler = webpack(config);
application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);
application.use(webpackHot(compiler));

application.get('*', require('./render').default);

application.listen(port, () => (console.log(`[SERVER] => ${host}:${port}`)));
