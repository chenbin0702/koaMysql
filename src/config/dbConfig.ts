function isString(data:string):data is string
{
  return typeof data ==='string'
}
interface DbConConf{
  host:string
  user:string
  password:string
  port:number
  database:string
}
interface EnvConf
{
  dev:DbConConf
  prod:DbConConf
}
class Conf{
  static conf:Conf=new Conf()
  env!:keyof EnvConf
  envConf!:EnvConf
  constructor()
  {
    this.env=process.env.NODE_ENV==='dev'?'dev':'prod'
  }
  initConf()
  {
    this.envConf={
      dev:{
        host:'localhost',
        user:'chenbin',
        password:'123456',
        database:'dang',
        port:3306
      },
      prod:{
        host:'www.puzzledcb.cn',
        user:'chenbin',
        password:'123456',
        database:'dang',
        port:3306
      }
    }
  }
  getConf():DbConConf;
  getConf(key:string):string;
  getConf(key:any=''):any{
    if(this.isDbConfKeys(key)&&key.length>0)
    {
      return this.envConf[this.env][key]
    }
    else
    {
      return this.envConf[this.env]
    }
  }
  isDbConfKeys(key:any):key is keyof DbConConf
  {
      return key==='host'||key==='user'||key==='password'||key==='port'||key==='database'
  }
}
export default Conf.conf