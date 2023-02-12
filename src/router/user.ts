import {Context} from 'koa';
import Router from 'koa-router';
const router=new Router()
// 路由预处理
router.prefix('/user')
// 获取用户
router.get('/findUserinfo/:username',async(ctx:Context)=>{
  const {username}=ctx.params
  ctx.body=`欢迎登陆${username}`
})
// 增加用户
router.post('/addUser',async(ctx:Context)=>{
  const user:userInfo=ctx.request.body
  ctx.body=`注册成功 ${user.username}`
})
interface userInfo
{
  username:string,
  password:string
}
export default router