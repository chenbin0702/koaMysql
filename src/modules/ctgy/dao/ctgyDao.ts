import { findAllId } from "../defmodel/oneToMany";
class CtgyDao
{
  static ctgyDao:CtgyDao=new CtgyDao()
  async findCtgys(firstId:string)
  {
    return findAllId(parseInt(firstId))
  }
}
export default CtgyDao.ctgyDao