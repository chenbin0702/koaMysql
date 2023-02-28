import { secondCtgyModel } from "./secCtgyModel";
import { thirdCtgyModel } from "./thirdCtgyModel";
// one to many
 secondCtgyModel.hasMany(thirdCtgyModel,{as:'thirdctgys',foreignKey:'secondctgyId'})
// many to one
 thirdCtgyModel.belongsTo(secondCtgyModel,{foreignKey:'secondctgyId',targetKey:'secondctgyId'})
// 通过一级ID查找二级和三级
export async function findAllId(firstctgyId:number) {
   return secondCtgyModel.findAll({
    // raw:true,
    where:{
      firstctgyId
    },
    include:[
      {
        model:thirdCtgyModel,
        as:'thirdctgys'
      }
    ]
  })
}