import koa from 'koa'
import serve from 'koa-static-folder'
import send from 'koa-send'
import Router from 'koa-router'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { MyComponent } from '../shared/app.js'

var router = Router();
var app = koa();

var str = ReactDOMServer.renderToString(<MyComponent />)
var initialState = { counter : 4 }

console.log(str);

debugger;



router.get('/', function *(){
  this.body = `<!DOCTYPE html>
                <head>
                  <meta charset="utf-8">
                  <title>Server Side Rendering with React and Redux</title>
                  <script type="text/javascript">
                    var initialState = ${JSON.stringify(initialState)};
                  </script>
                </head>
                <body>
                  <div id="app-view">${str}</div>
                  <script src="js/bundle.js" charset="utf-8"></script>
                </body>
              </html>`
}).get('/js/bundle.js', function *() {
  yield send(this, 'lib/client/bundle.js');
})

app.use(router.routes())

app.listen(3000);
