import {model} from '../defineModel';
class UserDao
{
 static addUser(userinfo:UserInfo)
  {
    return model.create(userinfo)
  }
}
export const {addUser}=UserDao
export type UserInfo={
  userid:number,
  username:string,
  password:string,
  address:string,
  valid:number
}