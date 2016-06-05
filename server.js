import Koa from 'koa';
import Router from 'koa-router';
import qs from 'koa-qs';
import parsebody from 'co-body';
import cors from 'koa-cors';
import logger from 'koa-logger';
import {graphql} from 'graphql';

let port = process.env.PORT || 3000;
let routes = new Router();
const app = new Koa();

//support nested query params
qs(app);

app
  .use(logger())
  .use(cors())
  .use(routes.routes())
  .use(routes.allowedMethods())
  .use(routes.middleware());

routes
  .get('/', function *(next) {
    this.body = 'Hello World!';
  })
  .get('/graphql', function *(next) {
    this.body = 'graphql!';
  })

app.listen(port, () => {
  console.log('app is listening on', port);
});

module.exports = app;