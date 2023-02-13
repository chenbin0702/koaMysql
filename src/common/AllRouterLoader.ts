// 自动路由加载
import path from 'path';
import Koa from 'koa';
import fs from 'fs';
import body from 'koa-body';
import Router from 'koa-router';
import json from 'koa-json';
import globalException from './globalExce';
class AllRouterLoader
{
  static allRouterLoader:AllRouterLoader=new AllRouterLoader()
  app!:Koa
  // 初始化方法
  init(app:Koa)
  {
   this.app=app
   const rootRouter= this.loadAllRouterWrapper()
   this.app.use(globalException)
   this.app.use(rootRouter.routes())
  //  监听方法
   this.listen()
  }
  // 加载所有的路由数组
  getFiles(dir:string)
  {
    return fs.readdirSync(dir)
  }
  // 加载所有路由的绝对路径
  getAbsoluteFilePaths()
  {
    const dir=path.join(process.cwd(),'/src/router')
    const allFiles=this.getFiles(dir)
    const allFullFilesPaths:string[]=[]
    for(let file of allFiles)
    {
      const fullFilePath=dir+'\\'+file
      allFullFilesPaths.push(fullFilePath)
    }
    return allFullFilesPaths
  }
  // 加载所有二级路由到一级路由
  loadAllRouterWrapper()
  {
    // 获取一级路由
    const rootRouter=this.getRootRouter()
    // 调用所有绝对路径的方法
    const allFullFilesPaths=this.getAbsoluteFilePaths()
    // 调用所有二级路由到一级路由的方法
    this.loadAllRouter(allFullFilesPaths,rootRouter)
    return rootRouter
  }
  // 获取一级路由
  getRootRouter()
  {
    const rootRouter=new Router()
    rootRouter.prefix('/dang');
    this.app.use(body())
    this.app.use(json())
    return rootRouter
  }
  // 自定义守卫
  isRouter(data:any):data is Router
  {
     return data instanceof Router
  }
  loadAllRouter(allFullFilesPaths:string[],rootRouter:Router)
  {
    for(let fullFilePath of allFullFilesPaths)
    {
      const module=require(fullFilePath)
      if(this.isRouter(module))
      {
        rootRouter.use(module.allowedMethods(),module.routes())
      }
    }
  }
  listen()
  {
    this.app.listen(8822)
    console.log("serve start");
    
  }
}
export default AllRouterLoader.allRouterLoader