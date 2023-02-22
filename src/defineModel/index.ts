import {DataTypes} from 'sequelize';
import {sequelize} from '../dao/BaseDaoDefine';
class userInfo
{
 static createModel()
  {
  const model= sequelize.define("userinfo",{
      userid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      username:
      {
        type:DataTypes.STRING(30),
        allowNull:false
      },
      password:
    {
      type:DataTypes.STRING(20),
      allowNull:false
    },
    address:{
      type:DataTypes.STRING(30),
      allowNull:true
    },
    valid:{
      type:DataTypes.TINYINT,
      allowNull:true
    }
    })
    model.sync({force:false})
    return model
  }
}
export const model=userInfo.createModel()