'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStaticFolder = require('koa-static-folder');

var _koaStaticFolder2 = _interopRequireDefault(_koaStaticFolder);

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _app = require('../shared/app.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)();
var app = (0, _koa2.default)();

var str = _server2.default.renderToString(_react2.default.createElement(_app.MyComponent, null));
var initialState = { counter: 3 };

console.log(str);

debugger;

router.get('/', function* () {
  this.body = `<!DOCTYPE html>
                <head>
                  <meta charset="utf-8">
                  <title>Server Side Rendering with React and Redux</title>
                  <script type="text/javascript">
                    var initialState = ${ JSON.stringify(initialState) };
                  </script>
                </head>
                <body>
                  <div id="app-view">${ str }</div>
                  <script src="js/bundle.js" charset="utf-8"></script>
                </body>
              </html>`;
}).get('/js/bundle.js', function* () {
  yield (0, _koaSend2.default)(this, 'lib/client/bundle.js');
});

app.use(router.routes());

app.listen(3000);