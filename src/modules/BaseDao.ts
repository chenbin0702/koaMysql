import dbConfig from '../config/dbConfig'
import {Dialect} from 'sequelize';
import {Sequelize} from 'sequelize-typescript';
import path from 'path';
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
      dialect,//表示何种数据库,
      pool:{
        max:10, //最大连接对象个数
        min:5, //最小连接个数
        idle:10000,//空闲时间最长等待时间
        acquire:1000//表示一条sql在获取连接资源最长等待时间
      },
      define:{
        timestamps:false,
        freezeTableName:true
      }
    })
  }
  addModels()
  {
    const modelPath=path.join(process.cwd(),"/src/modules/declomodel")
    this.sequelize.addModels([modelPath])
  }
}
export const {sequelize}=BaseDaoDefine.baseDaoORM