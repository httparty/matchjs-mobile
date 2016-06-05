import Koa from 'koa';
import Router from 'koa-router';
import qs from 'koa-qs';
import parsebody from 'co-body';
import cors from 'koa-cors';
import logger from 'koa-logger'

let port = process.env.PORT || 3000;
let routes = new Router();
const app = new Koa();

//support nested query params
qs(app);

app.use(logger());
app.use(cors());
app.use(routes.middleware());

app.use(function *() {
  this.body = "Hello world heyy girlll";
});

app.listen(port, () => {
  console.log('app is listening on', port);
});

module.exports = app;