
var Path = require('path');

var serve = require('koa-static-server');
var app = require('koa')();

// app.use(serve({ rootDir: Path.resolve('../demo/') }))
app.use(serve({ rootDir: Path.resolve('../demo/'), rootPath: '/demo', index: 'index.html' }))
app.listen(8080)

console.log('Static Server listening on port 8080.')

