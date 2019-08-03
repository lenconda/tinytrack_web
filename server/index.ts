import path from 'path';
import kcors from 'kcors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import config from './config';
import views from 'koa-views';
import serve from 'koa-static';

import indexRouter from './routers/index';
import createRouter from './routers/create';

const app = new Koa();

app.use(async (ctx, next): Promise<any> => {
  try { await next() } catch (e) {
    ctx.status = e.status || e.httpCode || 403;
    ctx.body = {
      status: ctx.status || 403,
      message: e.message,
      data: e.errors ? e.errors : {},
    };
  }
});

app.use(views(path.join(__dirname, '../server-templates'), {
  map: {
    html: 'handlebars'
  }
}));

app.use(indexRouter.routes()).use(indexRouter.allowedMethods());
app.use(createRouter.routes()).use(createRouter.allowedMethods());

app.use(serve(path.join(__dirname, '../server-bundle')));

app.use(kcors());

app.use(bodyParser());

if (config.isDev) app.use(logger());

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4318;

app.listen(port);
