import {DataTypes} from 'sequelize';
import {sequelize} from '../../BaseDao';
class SecondCtgyModel
{
  static createModel()
  {
    const model=sequelize.define('secondctgy',{
      secondctgyId:{
        type:DataTypes.INTEGER,
        field:'secondctgyId',
        primaryKey:true,
        autoIncrement:true
      },
      secondctgyname:{
        type:DataTypes.STRING(20),
        allowNull:false
      },
      firstctgyId:{
        type:DataTypes.INTEGER,
        field:'firstctgyId',
        allowNull:false
      }
    },{
      timestamps:false
    })
    return model
  }
}
export const secondCtgyModel=SecondCtgyModel.createModel()