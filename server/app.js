
var Path = require('path');

var serve = require('koa-static-server');
var app = require('koa')();

app.use(serve({ rootDir: Path.resolve('../demo/'), rootPath: '/demo', index: 'index.html', log: true, maxage: 31536000000 }));
app.listen(8080);

console.log('Static Server listening on port 8080.')

