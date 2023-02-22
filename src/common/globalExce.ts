import Koa,{Context} from 'koa';
import {fail} from './ResResult';
// 全局异常
const globalException=async(ctx:Context,next:Koa.Next)=>{
  try {
    await next()
  } catch (error) {
    const err=error as {message:string}
    ctx.body=fail(`错误 :${err.message}`)
  }
}
export default globalException