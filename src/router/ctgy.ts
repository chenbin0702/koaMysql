import Router from 'koa-router';
import {Context} from 'koa';
import {success} from '../common/ResResult';
import ctgyDao from '../modules/ctgy/dao/ctgyDao';
const router= new Router()
router.prefix('/ctgy')
router.get('/findCtgys/:firstId',async(ctx:Context)=>{
   const {firstId}=ctx.params
   const result=await ctgyDao.findCtgys(firstId)
   console.log("eeee",result);
   ctx.body=success(result)
})
module.exports= router