import dbConfig from '../config/dbConfig';
import {Dialect} from 'sequelize';
import {Sequelize} from 'sequelize-typescript';
class BaseDaoDefine
{
  static baseDaoORM:BaseDaoDefine=new BaseDaoDefine()
  sequelize!:Sequelize
  constructor()
  {
    this.initSeqConf('mysql')
  }
  initSeqConf(dialect:Dialect)
  {
    let {host,port,password,database,user}=dbConfig.getConf()
    this.sequelize=new Sequelize(database,user,password,{
      host,
      port,
      dialect:'mysql',//表示何种数据库,
      define:{
        timestamps:false,
        freezeTableName:true
      }
    })
  }
}
export const {sequelize}=BaseDaoDefine.baseDaoORM