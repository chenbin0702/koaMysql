function isString(data: any): data is string {
  return typeof data === 'string'
}
interface DbConfig {
  host: string, // 可选
  user: string,
  password: string,
  port: number,
  database: string
}
// 环境接口
interface EnvConf {
  dev: DbConfig,
  prod: DbConfig
}
class Conf {
  static conf: Conf = new Conf()
  env!: keyof EnvConf
  envConf!: EnvConf
  constructor() {
      console.log(process.env.NODE_ENV)
      this.env = process.env.NODE_ENV === "dev"?"dev":"prod"
      console.log(this.env)
      this.initConf()
  }
  initConf() {
      this.envConf = {
          dev: {
              host: "localhost", 
              user: "chenbin",
              password: "123456",
              port: 3306,
              database: "dang"
          },
          prod: {
              host: "www.test.com", 
              user: "admin",
              password: "root",
              port: 3306,
              database: "test"
          }
      }
  }
  getConf():DbConfig
  getConf(key:string):string
  getConf(key:any=''):any{
      if(this.isDbConConfKeys(key)&&key.length>0){
          return this.envConf[this.env][key]
      }else{
          return this.envConf[this.env]
      }
  }
  isDbConConfKeys(key:any):key is keyof DbConfig{
      return key === 'host' || key === 'user' || key === 'password' || key === 'database'
  }
}
export default Conf.conf
