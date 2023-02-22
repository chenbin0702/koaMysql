import { UserInfo } from '@/dao/UserDao';
import {Context} from 'koa';
import Router from 'koa-router';
import {success} from '../common/ResResult';
import UserDao from '../dao/UserDao';
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
 const dbUserInfo=await UserDao.addUser(userinfo)
 ctx.body=success(dbUserInfo)
})
// 获取所有用户
router.get('/findAllUserInfo',async(ctx:Context)=>{
  const users=await UserDao.findUser()
  ctx.body=success(users)
})
// 聚合查找
router.get('/findCount',async(ctx:Context)=>{
  ctx.body=success(await UserDao.countFind())
})
// 分页查找
router.get('/findWrapPaper/:pageNo/:pageSize',async(ctx:Context)=>{
  const {pageNo,pageSize}=ctx.params
  const offset=(pageNo-1)*pageSize
  ctx.body=success(await UserDao.findByWrap(parseInt(pageSize),offset))
})
module.exports= router