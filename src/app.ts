import Koa from 'koa';
import allRouterLoader from './common/AllRouterLoader';
const app=new Koa()
allRouterLoader.init(app)
