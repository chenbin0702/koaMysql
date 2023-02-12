import Koa from 'koa';
import body from 'koa-body';
import Router from 'koa-router';
import json from 'koa-json';
import userRouter from './router/user';
const app=new Koa()
const router=new Router()
router.prefix('/dang');

router.use(json())
router.use(body())
router.use(userRouter.routes(),userRouter.allowedMethods())
app.use(router.routes())
app.listen(5201)
console.log("server start");
