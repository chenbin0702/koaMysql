import {DataTypes} from 'sequelize';
import {sequelize} from '../../BaseDao';
class ThirdCtgyModel
{
  static createModel()
  {
    const model=sequelize.define('thirdctgy',{
      thirdctgyId:{
        type:DataTypes.INTEGER,
        field:'thirdctgyId',
        primaryKey:true,
        autoIncrement:true
      },
      thirdctgyname:{
        type:DataTypes.STRING(20),
        field:'thirdctgyname',
        allowNull:false
      },
      secondctgyId:{
        type:DataTypes.INTEGER,
        field:'secondctgyId',
        allowNull:false
      }
    },{
      timestamps:false
    })
    return model
  }
}
export const thirdCtgyModel=ThirdCtgyModel.createModel()