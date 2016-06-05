import koa from 'koa';
var app = koa();

let port = process.env.PORT || 3000;

app.use(function *() {
  this.body = "Hello world heyy girlll";
});

app.listen(port);