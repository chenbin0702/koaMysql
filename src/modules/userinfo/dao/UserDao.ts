import {model} from '../model/BaseDao';
import {Op,Sequelize} from 'sequelize';

class UserDao
{
  static userDao:UserDao=new UserDao()
  addUser(userinfo:UserInfo)
  {
    return model.create(userinfo)
  }
 findUser()
  {
    return model.findAll({
      raw:true,
      // 投影查找
      // attributes:['userid','password'] 
    })
  }
  // 模糊查找
 findByLike()
  {
    return model.findAll({
      raw:true,
      where:{
        username:{
          [Op.like]:'%陈'
        }
      }
    })
  }
  // 聚合查找
  countFind()
  {
    return model.findAll({
      raw:true,
      group:'address',
      attributes:['address',[Sequelize.fn('count',Sequelize.col('valid')),'totalcount']],
      where:{
        valid:1
      }
    })
  }
  // 分页查询
  findByWrap(pageSize:number,offset:number)
  {
     return model.findAll({
      raw:true,
      limit:pageSize,
      offset:offset
     })
  }
}
export default UserDao.userDao
export type UserInfo={
  userid:number,
  username:string,
  password:string,
  address:string,
  valid:number
}