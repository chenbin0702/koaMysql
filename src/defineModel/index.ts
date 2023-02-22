import {DataTypes} from 'sequelize';
import {sequelize} from '../dao/BaseDaoDefine';
class userInfo
{
 static createModel()
  {
  const model= sequelize.define("userinfo",{
      userid:{
        type:DataTypes.INTEGER,
        field:'userid',
        primaryKey:true,
        autoIncrement:true
      },
      username:
      {
        type:DataTypes.STRING(30),
        field:'username',
        allowNull:false
      },
      password:
    {
      type:DataTypes.STRING(20),
      field:'password',
      allowNull:false
    },
    address:{
      type:DataTypes.STRING(30),
      field:'address',
      allowNull:true
    },
    valid:{
      type:DataTypes.TINYINT,
      field:'valid',
      allowNull:true
    }
    },
    {
      freezeTableName:true,//true 表示使用给定的表名，false表示模型名后面加s 作为表名
      timestamps:false //true 表示给时间吗模型添加时间属性,false 表示不添加
    })
    // model.sync({force:false})
    // force 同步数据库 为true时表示存在先删除在创建,false表示不存在才创建
    return model
  }
}
export const model=userInfo.createModel()