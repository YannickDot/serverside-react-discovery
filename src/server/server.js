import koa from 'koa'
import serve from 'koa-static-folder'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { MyComponent } from '../shared/app.js'

var app = koa();

var str = ReactDOMServer.renderToString(<MyComponent />)
var initialState = { counter : 3 }

app.use(function *(){
  this.body = `<!DOCTYPE html>
                <head>
                  <meta charset="utf-8">
                  <title>Server Side Rendering with React and Redux</title>
                  <script type="text/javascript">
                    var initialState = ${JSON.stringify(initialState)};
                  </script>
                  <script src="" charset="utf-8"></script>
                </head>
                <body>
                  <div id="app">${str}</div>
                </body>
              </html>`
});

app.listen(3000);
