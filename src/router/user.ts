import { UserInfo } from '@/dao/UserDao';
import {Context} from 'koa';
import Router from 'koa-router';
import {success} from '../common/ResResult';
import {addUser} from '../dao/UserDao';
const router=new Router()
// 路由预处理
router.prefix('/user')
// 获取用户
router.get('/findUserinfo/:username',async(ctx:Context)=>{
  const {username}=ctx.params
  ctx.body=success(`欢迎登陆${username}`)
})
// 增加用户
router.post('/addUser',async(ctx:Context)=>{
  const userinfo:UserInfo=ctx.request.body
 const dbUserInfo=await addUser(userinfo)
 ctx.body=success(dbUserInfo)
})

module.exports= router